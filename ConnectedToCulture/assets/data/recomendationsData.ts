
export interface RecommendationItem {
    title: string;
    image: any;
    rating: number;
    reviewNumber: number;
    location: string;
    description: string;
    price: number;
    totalPrice: number;
  }
  
  const recommendations: RecommendationItem[] = [
    {
      title: 'ABC Hotel',
      image: require('../../assets/images/country/ghana/yoel-winkler-zCAh6tOWFt8-unsplash.jpg'),
      rating: 9.0,
      reviewNumber: 1000,
      location: 'Location A',
      description: 'Fully refundable. Reserve Now.Pay Later',
      price: 200,
      totalPrice: 400,
    },
    {
      title: 'ABC Hotel',
      image: require('../../assets/images/country/ghana/yoel-winkler-zCAh6tOWFt8-unsplash.jpg'),
      rating: 9.0,
      reviewNumber: 1000,
      location: 'Location A',
      description: 'Fully refundable. Reserve Now.Pay Later',
      price: 200,
      totalPrice: 400,
    },
    {
      title: 'ABC Hotel',
      image: require('../../assets/images/country/ghana/yoel-winkler-zCAh6tOWFt8-unsplash.jpg'),
      rating: 9.0,
      reviewNumber: 1000,
      location: 'Location A',
      description: 'Fully refundable. Reserve Now.Pay Later',
      price: 200,
      totalPrice: 400,
    },
  
    {
      title: 'ABC Hotel',
      image: require('../../assets/images/country/ghana/yoel-winkler-zCAh6tOWFt8-unsplash.jpg'),
      rating: 9.0,
      reviewNumber: 1000,
      location: 'Location A',
      description: 'Fully refundable. Reserve Now.Pay Later',
      price: 200,
      totalPrice: 400,
    },
  
  
  ];
  
  export default recommendations;