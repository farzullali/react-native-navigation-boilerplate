export type IconName = 
  | 'home'
  | 'profile'
  | 'settings'
  | 'back'
  | 'menu';

export type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
};

export type IconRenderFn = (props: IconProps) => JSX.Element;