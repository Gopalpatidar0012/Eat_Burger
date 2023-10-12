export interface SliderDataType {
  id: string;
  title: string;
  image: any;
}
export interface SliderCardType {
  sliderData: SliderDataType[];
  currentSlide: number;
}

export interface FeaturedCardType {
  image?: any;
  description?: string;
  price: number;
  title: string;
}
export interface FeaturedProductsType {
  id: string;
  img?: HTMLImageElement;
  description?: string;
  price: number;
  title: string;
  options: { title: string; additionalprice: string }[];
}
