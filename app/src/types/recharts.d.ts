// Fix recharts class components not being recognized as valid JSX components
// with newer @types/react versions
declare module "recharts" {
  import * as React from "react";
  
  export class XAxis extends React.Component<any, any> {}
  export class YAxis extends React.Component<any, any> {}
  export class Tooltip extends React.Component<any, any> {}
  export class Line extends React.Component<any, any> {}
  export class Bar extends React.Component<any, any> {}
  export class CartesianGrid extends React.Component<any, any> {}
  export class ResponsiveContainer extends React.Component<any, any> {}
  export class LineChart extends React.Component<any, any> {}
  export class BarChart extends React.Component<any, any> {}
  export class Legend extends React.Component<any, any> {}
  export class Area extends React.Component<any, any> {}
  export class AreaChart extends React.Component<any, any> {}
  export class PieChart extends React.Component<any, any> {}
  export class Pie extends React.Component<any, any> {}
  export class Cell extends React.Component<any, any> {}
  export class RadialBarChart extends React.Component<any, any> {}
  export class RadialBar extends React.Component<any, any> {}
  export class PolarGrid extends React.Component<any, any> {}
  export class PolarAngleAxis extends React.Component<any, any> {}
  export class PolarRadiusAxis extends React.Component<any, any> {}
  
  export type LegendProps = any;
}
