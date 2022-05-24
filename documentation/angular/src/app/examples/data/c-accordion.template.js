
/**
 * Examples for c-accordion.
 * Automatically generated at 5/24/2022, 8:09:04 AM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */

export const basic = `<c-accordion value="one">
  <c-accordion-item heading="One" value="one">
    <i class="mdi mdi-access-point" slot="icon"></i>
    Lorem ipsum dolor sit amet.
  </c-accordion-item>
  <c-accordion-item heading="Two" value="two">
    <i class="mdi mdi-nas" slot="icon"></i>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, perspiciatis?
  </c-accordion-item>
  <c-accordion-item heading="Three" value="three">
    <i class="mdi mdi-camera" slot="icon"></i>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum perspiciatis
    itaque!
  </c-accordion-item>
</c-accordion>`;

export const mandatory = `<c-accordion value="one" mandatory>
  <c-accordion-item heading="One" value="one">
    <i class="mdi mdi-access-point" slot="icon"></i>
    Lorem ipsum dolor sit amet.
  </c-accordion-item>
  <c-accordion-item heading="Two" value="two">
    <i class="mdi mdi-nas" slot="icon"></i>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, perspiciatis?
  </c-accordion-item>
  <c-accordion-item heading="Three" value="three">
    <i class="mdi mdi-camera" slot="icon"></i>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum perspiciatis
    itaque!
  </c-accordion-item>
</c-accordion>`;

export const multiple = `<c-accordion [value]="['one', 'three']" multiple>
  <c-accordion-item heading="One" value="one">
    <i class="mdi mdi-access-point" slot="icon"></i>
    Lorem ipsum dolor sit amet.
  </c-accordion-item>
  <c-accordion-item heading="Two" value="two">
    <i class="mdi mdi-nas" slot="icon"></i>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, perspiciatis?
  </c-accordion-item>
  <c-accordion-item heading="Three" value="three">
    <i class="mdi mdi-camera" slot="icon"></i>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum perspiciatis
    itaque!
  </c-accordion-item>
</c-accordion>`;

export const outlined = `<c-accordion value="three" outlined>
  <c-accordion-item heading="One" value="one">
    <i class="mdi mdi-access-point" slot="icon"></i>
    Lorem ipsum dolor sit amet.
  </c-accordion-item>
  <c-accordion-item heading="Two" value="two">
    <i class="mdi mdi-nas" slot="icon"></i>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, perspiciatis?
  </c-accordion-item>
  <c-accordion-item heading="Three" value="three">
    <i class="mdi mdi-camera" slot="icon"></i>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum perspiciatis
    itaque!
  </c-accordion-item>
</c-accordion>`;
