export default interface IRoute {
  path: string;
  name: string;
  exact: boolean;
  component: any;
  location: string;
  props?: any;
}
