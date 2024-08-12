export interface Point {
  x: number
  y: number
}

export interface Port {
  x: number
  y: number
  labels: string[]
}

export interface PathPrimitive {
  type: "path"
  fill?: boolean
  points: Point[]
  color: string
}

export interface TextPrimitive {
  type: "text"
  text: string
  fontSize?: number
  x: number
  y: number
  anchor: NinePointAnchor
}

export interface CirclePrimitive {
  type: "circle"
  x: number
  y: number
  radius: number
}

export interface BoxPrimitive {
  type: "box"
  x: number
  y: number
  width: number
  height: number
  anchor: string
}

export type Primitive =
  | PathPrimitive
  | TextPrimitive
  | CirclePrimitive
  | BoxPrimitive

export interface Symbol {
  primitives: Primitive[]
  center: Point
  ports: Port[]
  size: {
    width: number
    height: number
  }
}

export type SvgAnchor = "start" | "middle" | "end"

export type NinePointAnchor =
  | "top_left"
  | "top_right"
  | "bottom_left"
  | "bottom_right"
  | "center"
  | "middle_top"
  | "middle_bottom"
  | "middle_left"
  | "middle_right"
