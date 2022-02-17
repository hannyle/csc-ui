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
import prettier from 'prettier';
import parser from 'prettier/parser-html';
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
    this.code = prettier.format(
      this.raw ||
        sanitizeHtml(this.example.nativeElement.innerHTML, {
          allowedTags: false,
          allowedAttributes: {
            '*': this.allowedAttributes,
          },
        }),
      {
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
      },
    );
    // console.warn(prettier);
    // prettier.resolveConfig('../../../prettier.config.js').then(options => {
    //   console.warn('jokke', options);
    // });
    // console.warn(this.code);
  }
}
