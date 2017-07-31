declare module 'expo' {
  // TODO:
  export const MapView: any
  export const Facebook: any
  export const AppLoading: any
}

declare module '@expo/vector-icons' {
  export interface IconProps {
    size?: number
    name: string
    color?: string
  }

  export class Entypo extends React.Component<IconProps, void> {}
  export class EvilIcons extends React.Component<IconProps, void> {}
  export class FontAwesome extends React.Component<IconProps, void> {}
  export class Foundation extends React.Component<IconProps, void> {}
  export class Ionicons extends React.Component<IconProps, void> {}
  export class MaterialIcons extends React.Component<IconProps, void> {}
  export class MaterialComunityIcons extends React.Component<IconProps, void> {}
  export class Octicons extends React.Component<IconProps, void> {}
  export class Zocial extends React.Component<IconProps, void> {}
  export class SimpleLineIcons extends React.Component<IconProps, void> {}
}
