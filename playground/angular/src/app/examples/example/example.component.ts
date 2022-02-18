import {
  ChangeDetectorRef,
  AfterViewInit,
  AfterContentChecked,
  Component,
  ViewChild,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import sanitizeHtml from 'sanitize-html';
import prettier, { Options } from 'prettier';
import parser from 'prettier/parser-html';
import babelParser from 'prettier/parser-babel';
import docs from '../../../../../../docs.json';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleComponent implements AfterViewInit, AfterContentChecked {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() cols: string;
  @Input() rows: string;
  @Input() raw: string;
  @Input() script: string;
  @ViewChild('example') example;
  code = '';
  scriptCode = '';
  allowedAttributes = [];
  showCode = false;

  constructor(private cdref: ChangeDetectorRef) {
    const attrs = docs.components?.reduce(
      (items, component) => {
        items.push(...component.props.map((prop) => prop.attr || prop.name));

        return items;
      },
      ['class', 'style', 'slot'],
    );
    this.allowedAttributes = [...new Set(attrs)];
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ngAfterViewInit(): void {
    const prettierConfig: Options = {
      parser: 'angular',
      plugins: [parser],
      trailingComma: 'all',
      tabWidth: 2,
      semi: true,
      singleQuote: true,
      bracketSpacing: true,
      bracketSameLine: false,
      printWidth: 50,
      htmlWhitespaceSensitivity: 'ignore',
    };

    this.code = prettier.format(
      this.raw ||
        sanitizeHtml(this.example.nativeElement.innerHTML, {
          allowedTags: false,
          allowedAttributes: {
            '*': this.allowedAttributes,
          },
        }),
      prettierConfig,
    );

    this.scriptCode = this.script
      ? prettier.format(this.script, {
          ...prettierConfig,
          parser: 'babel',
          plugins: [babelParser],
        })
      : null;
  }
}
