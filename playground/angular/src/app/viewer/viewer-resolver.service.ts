import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import docs from '../../../../../docs.json';
import { parseComponents } from '../utils/utils';

@Injectable({ providedIn: 'root' })
export class ViewerResolverService implements Resolve<any> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return parseComponents(docs).find(
      (component) => component.tag === route.params['tag']
    );
  }
}
