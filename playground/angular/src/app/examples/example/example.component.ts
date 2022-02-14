import {
  ChangeDetectorRef,
  AfterViewInit,
  AfterContentChecked,
  Component,
  ViewChild,
  ChangeDetectionStrategy,
  Input,
  ContentChildren,
  QueryList,
} from '@angular/core';
import sanitizeHtml from 'sanitize-html';
import prettier from 'prettier';
import parser from 'prettier/parser-html';
import docs from '../../../../../../docs.json';
import { Example } from './Example';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleComponent implements AfterViewInit, AfterContentChecked {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() flex: string;
  @ViewChild('example') example;
  @ContentChildren(Example) items: QueryList<Example>;
  exampleHtml: Example;
  code = '';
  allowedAttributes = [];

  constructor(private cdref: ChangeDetectorRef) {
    const attrs = docs.components.reduce(
      (items, component) => {
        items.push(...component.props.map((prop) => prop.attr || prop.name));

        return items;
      },
      ['class'],
    );
    this.allowedAttributes = [...new Set(attrs)];
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ngAfterViewInit(): void {
    this.code = prettier.format(
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
        printWidth: 100,
        htmlWhitespaceSensitivity: 'ignore',
      },
    );

    this.exampleHtml = this.items.toArray()[0];
    console.log('🅱️', this.exampleHtml.templateText);
    // console.warn(prettier);
    // prettier.resolveConfig('../../../prettier.config.js').then(options => {
    //   console.warn('jokke', options);
    // });
    // console.warn(this.code);
  }
}
