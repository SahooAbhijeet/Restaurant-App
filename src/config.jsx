export const IMG_CDN_URL = 
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const FETCH_MENU_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.2960587&lng=85.8245398&restaurantId=";

  export const FETCH_RESTAURANT_URL = 
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  

export const restaurantList = [
{
  "statusCode": 0,
  "data": {
    "statusMessage": "done successfully",
    "pageOffset": {
      "nextOffset": "CI4gEOMTKICYxJOJm4++MzDqCTgD",
      "widgetOffset": {
        "collectionV5RestaurantListWidget": "13",
        "inlineFacetFilter": "",
        "collectionV5MastheadWidget": ""
      }
    },
    "cards": [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
            "collectionId": "92870",
            "title": "WELCOME50",
            "imageId": "97fd7fb9638a47fe7ec2f67679afb74e",
            "aspectRatio": "1",
            "cta": {
              "link": "swiggy://collectionV2?collection_id=92870&tags=layout_ux4",
              "text": "Restaurant collection",
              "type": "collectionv2"
            },
            "type": "COLLECTION_MASTHEAD_TYPE_ONLY_IMAGE",
            "count": "500 restaurants"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
            "sortConfigs": [
              {
                "key": "relevance",
                "title": "Relevance (Default)",
                "selected": true,
                "defaultSelection": true
              },
              {
                "key": "deliveryTimeAsc",
                "title": "Delivery Time"
              },
              {
                "key": "modelBasedRatingDesc",
                "title": "Rating"
              },
              {
                "key": "costForTwoAsc",
                "title": "Cost: Low to High"
              },
              {
                "key": "costForTwoDesc",
                "title": "Cost: High to Low"
              }
            ],
            "restaurantCount": 500,
            "facetList": [
              {
                "label": "Veg/Non-Veg",
                "id": "isVeg",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Non Veg",
                    "id": "isVegfacetquery2",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Pure Veg",
                    "id": "isVegfacetquery3",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filter by",
                "openFilter": true
              },
              {
                "label": "Ratings",
                "id": "rating",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Ratings 3.5+",
                    "id": "ratingfacetquery3",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Ratings 4.0+",
                    "id": "ratingfacetquery4",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Ratings 4.5+",
                    "id": "ratingfacetquery5",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filter by",
                "openFilter": true
              },
              {
                "label": "Delivery Time",
                "id": "deliveryTime",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Less than 30 mins",
                    "id": "deliveryTimefacetquery2",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Less than 45 mins",
                    "id": "deliveryTimefacetquery3",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filter by",
                "openFilter": true
              },
              {
                "label": "Cost For Two",
                "id": "costForTwo",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Less than Rs. 300",
                    "id": "costForTwofacetquery3",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Rs.300 - Rs.600",
                    "id": "costForTwofacetquery4",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Greater than Rs. 600",
                    "id": "costForTwofacetquery5",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filter by",
                "openFilter": true
              }
            ]
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "342643",
              "name": "The Pizza Bakery",
              "cloudinaryImageId": "0335dd45be555d0a4187255e57d2ca88",
              "locality": "Church Street",
              "areaName": "Ashok Nagar",
              "costForTwo": "₹700 for two",
              "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Continental"
              ],
              "avgRating": 4.4,
              "feeDetails": {
                "restaurantId": "342643",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3600
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3600
              },
              "parentId": "11108",
              "avgRatingString": "4.4",
              "totalRatingsString": "1K+",
              "promoted": true,
              "adTrackingId": "cid=7768231~p=1~eid=0000018a-36e6-e137-3eea-f3f000d4012a~srvts=1693138215223~92870",
              "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "21 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-27 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                ],
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "description": "",
                          "shortDescription": "options available",
                          "fontColor": "#7E808C"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹100"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=342643",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "43836",
              "name": "McDonald's",
              "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
              "locality": "MG Road",
              "areaName": "Ashok Nagar",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
              ],
              "avgRating": 4.2,
              "feeDetails": {
                "restaurantId": "43836",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3100
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3100
              },
              "parentId": "630",
              "avgRatingString": "4.2",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "19 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-28 02:45:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "ABOVE ₹999",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=43836",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "105167",
              "name": "Bhartiya Jalpan",
              "cloudinaryImageId": "lpikismf7ulkpknsbw2h",
              "locality": "Tasker Town",
              "areaName": "Commercial Street",
              "costForTwo": "₹270 for two",
              "cuisines": [
                "North Indian",
                "Sweets",
                "Desserts",
                "Chaat"
              ],
              "avgRating": 4.2,
              "veg": true,
              "feeDetails": {
                "restaurantId": "105167",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3700
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3700
              },
              "parentId": "7518",
              "avgRatingString": "4.2",
              "totalRatingsString": "10K+",
              "promoted": true,
              "adTrackingId": "cid=7686392~p=2~eid=0000018a-36e6-e137-3eea-f3f100d4020f~srvts=1693138215223~92870",
              "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-27 21:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=105167",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "570511",
              "name": "Bakingo",
              "cloudinaryImageId": "qwbqggsxzw86vgk60c9c",
              "locality": "MV Jayanthi Road",
              "areaName": "Vasanth Nagar",
              "costForTwo": "₹299 for two",
              "cuisines": [
                "Bakery",
                "Desserts",
                "Beverages",
                "Snacks"
              ],
              "avgRating": 4.4,
              "feeDetails": {
                "restaurantId": "570511",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3900
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3900
              },
              "parentId": "3818",
              "avgRatingString": "4.4",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "22 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-28 01:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  },
                  "textBased": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=570511",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "53503",
              "name": "Brik Oven",
              "cloudinaryImageId": "49352a71022a5b08a8361306ba253892",
              "locality": "Church Street",
              "areaName": "Church Street",
              "costForTwo": "₹700 for two",
              "cuisines": [
                "Italian",
                "Pizzas",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4.2,
              "feeDetails": {
                "restaurantId": "53503",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3600
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3600
              },
              "parentId": "7389",
              "avgRatingString": "4.2",
              "totalRatingsString": "10K+",
              "promoted": true,
              "adTrackingId": "cid=7734117~p=3~eid=0000018a-36e6-e137-3eea-f3f200d40318~srvts=1693138215223~92870",
              "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-27 23:30:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=53503",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "5938",
              "name": "Burger King",
              "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
              "locality": "Tasker Town",
              "areaName": "Shivaji Nagar",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Burgers",
                "American"
              ],
              "avgRating": 4.1,
              "feeDetails": {
                "restaurantId": "5938",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3100
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3100
              },
              "parentId": "166",
              "avgRatingString": "4.1",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 2.7,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "2.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-28 02:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=5938",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "109787",
              "name": "Chianti",
              "cloudinaryImageId": "byb52jmakvfk71lqd0av",
              "locality": "MG Road",
              "areaName": "MG Road",
              "costForTwo": "₹1250 for two",
              "cuisines": [
                "Italian",
                "Pizzas",
                "Salads",
                "Pastas",
                "Desserts"
              ],
              "avgRating": 4.4,
              "feeDetails": {
                "restaurantId": "109787",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 4800
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 4800
              },
              "parentId": "7396",
              "avgRatingString": "4.4",
              "totalRatingsString": "1K+",
              "promoted": true,
              "adTrackingId": "cid=7634999~p=5~eid=0000018a-36e6-e137-3eea-f3f400d40555~srvts=1693138215223~92870",
              "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 4,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "4.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-27 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=109787",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "588619",
              "name": "KFC",
              "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
              "locality": "Brigade Rd",
              "areaName": "Ashok Nagar",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
              ],
              "avgRating": 4.1,
              "feeDetails": {
                "restaurantId": "588619",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3100
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3100
              },
              "parentId": "547",
              "avgRatingString": "4.1",
              "totalRatingsString": "500+",
              "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 2.8,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "2.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-28 01:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {
                    
                  },
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=588619",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "665528",
              "name": "TART Cafe",
              "cloudinaryImageId": "970e39d5ed45923ee153889e6a148f1f",
              "locality": "Brigade Road",
              "areaName": "Central Bangalore",
              "costForTwo": "₹750 for two",
              "cuisines": [
                "Bakery",
                "Desserts",
                "Pastas"
              ],
              "avgRating": 4.3,
              "feeDetails": {
                "restaurantId": "665528",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3100
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3100
              },
              "parentId": "201283",
              "avgRatingString": "4.3",
              "totalRatingsString": "20+",
              "promoted": true,
              "adTrackingId": "cid=7766084~p=6~eid=0000018a-36e6-e137-3eea-f3f500d40635~srvts=1693138215223~92870",
              "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-27 21:30:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=665528",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "23847",
              "name": "Domino's Pizza",
              "cloudinaryImageId": "fjqcvqfgqlw6h0atques",
              "locality": "Rest House Road",
              "areaName": "Brigade Road",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
              ],
              "avgRating": 4.3,
              "feeDetails": {
                "restaurantId": "23847",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3100
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3100
              },
              "parentId": "2456",
              "avgRatingString": "4.3",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 25,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-27 22:59:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹999",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=23847",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "443387",
              "name": "Flying Kombucha",
              "cloudinaryImageId": "tijsbzeyx2tgxexipdx5",
              "locality": "Brigade road",
              "areaName": "MG Road",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Healthy Food",
                "Beverages",
                "Juices"
              ],
              "avgRating": 4.6,
              "veg": true,
              "feeDetails": {
                "restaurantId": "443387",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3100
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3100
              },
              "parentId": "80695",
              "avgRatingString": "4.6",
              "totalRatingsString": "20+",
              "promoted": true,
              "adTrackingId": "cid=8021927~p=8~eid=0000018a-36e6-e137-3eea-f3f700d4082f~srvts=1693138215223~92870",
              "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 2.8,
                "serviceability": "SERVICEABLE",
                "slaString": "27 mins",
                "lastMileTravelString": "2.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-27 21:30:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "description": "",
                          "shortDescription": "brand",
                          "fontColor": "#7E808C"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=443387",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "281469",
              "name": "Lavonne",
              "cloudinaryImageId": "emlehbuwgsmryxhwzhvq",
              "locality": "St. Marks Road",
              "areaName": "St. Marks Road",
              "costForTwo": "₹750 for two",
              "cuisines": [
                "Bakery",
                "Desserts"
              ],
              "avgRating": 4.6,
              "feeDetails": {
                "restaurantId": "281469",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3600
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3600
              },
              "parentId": "10530",
              "avgRatingString": "4.6",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 0.6,
                "serviceability": "SERVICEABLE",
                "slaString": "17 mins",
                "lastMileTravelString": "0.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-27 22:40:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                ],
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {
                
              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "description": "",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Gourmet",
                          "imageId": "newg.png"
                        }
                      }
                    ]
                  }
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=281469",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      }
    ],
    "firstOffsetRequest": true,
    "nextFetch": 3
  },
  "tid": "4c0cafa3-746d-43a0-ad5e-ae28365c328d",
  "sid": "8ztd93d0-f042-4733-91ae-4cae9819356a",
  "deviceId": "4dfd2575-70a1-5f85-f782-52ee4ff9f768",
  "csrfToken": "ExeINrtGFkPu-mCxjG88wpitYsQx8P-KaDYlTb6E"
}
]

export const restaurantMenuList = [
{
  "statusCode": 0,
  "data": {
    "statusMessage": "done successfully",
    "cards": [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "280216",
              "name": "Lavonne",
              "city": "Bangalore",
              "slugs": {
                "restaurant": "lavonne-indiranagar-indiranagar",
                "city": "bangalore"
              },
              "uniqueId": "9f164b61-2da2-4495-bf78-7c005e42c8d5",
              "cloudinaryImageId": "udzufnegmtvimdypnfbk",
              "locality": "Indiranagar",
              "areaName": "Indiranagar",
              "costForTwo": "100000",
              "costForTwoMessage": "₹1000 for two",
              "cuisines": [
                "Bakery",
                "Desserts"
              ],
              "avgRating": 4.6,
              "feeDetails": {
                "restaurantId": "280216",
                "fees": [
                  {
                    "name": "distance",
                    "fee": 5500
                  },
                  {
                    "name": "time"
                  },
                  {
                    "name": "special"
                  }
                ],
                "totalFee": 5500,
                "title": "Delivery Charge",
                "amount": "5500"
              },
              "parentId": "10530",
              "avgRatingString": "4.6",
              "totalRatingsString": "1K+ ratings",
              "sla": {
                "restaurantId": "280216",
                "deliveryTime": 31,
                "minDeliveryTime": 31,
                "maxDeliveryTime": 31,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "stressFactor": 0.5998043,
                "rainMode": "RAIN_MODE_NONE",
                "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
                "zoneId": 2,
                "slaString": "31 MINS",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-08-31 22:40:00",
                "visibility": true,
                "opened": true,
                "restaurantClosedMeta": {
                  
                }
              },
              "aggregatedDiscountInfo": {
                "shortDescriptionList": [
                  {
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "20% off up to ₹100 | Above ₹249",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "20% off up to ₹125 | Use KOTAK125 Above ₹500",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "visible": true
              },
              "badges": {
                
              },
              "slugString": "lavonne-indiranagar-indiranagar",
              "isOpen": true,
              "labels": [
                {
                  "title": "Timings",
                  "message": "null"
                },
                {
                  "title": "Address",
                  "message": "2nd Phase, #263, 3rd Cross Rd, Stage 2, Domlur, Bengaluru, Karnataka 560071"
                },
                {
                  "title": "Cuisines",
                  "message": "Bakery,Desserts"
                }
              ],
              "logo": "v1642740559/G%20header%20logos/Lavonne.png",
              "totalRatings": 1000,
              "aggregatedDiscountInfoV2": {
                "shortDescriptionList": [
                  {
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "20% off up to ₹100 | Above ₹249",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "20% off up to ₹125 | Use KOTAK125 Above ₹500",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "couponDetailsCta": "View coupon details"
              },
              "type": "F",
              "headerBanner": {
                "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/280216"
              },
              "expectationNotifiers": [
                {
                  "icon": {
                    
                  },
                  "popup": {
                    "cta": {
                      
                    }
                  },
                  "type": "DISTANCE_FEE_NON_FOOD_LM",
                  "halfCardPopup": {
                    "halfCardPopupHeader": {
                      
                    }
                  }
                }
              ],
              "generalPurposeInfoListV2": [
                {
                  "cta": {
                    "info": {
                      "recordings": {
                        
                      }
                    },
                    "linkCta": {
                      
                    }
                  }
                }
              ],
              "ratingSlab": "RATING_SLAB_5",
              "restaurantCategory": "RESTAURANT_CATEGORY_GOURMET",
              "backgroundImage": "v1641894907/gourmet%20menu%20header/Lavonne.png",
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "hasBestsellerItems": true,
              "hasGuiltfreeItems": true,
              "brandHeaderText": "Home of iconic European delicacies...",
              "cartOrderabilityNudgeBanner": {
                "parameters": {
                  
                },
                "presentation": {
                  
                }
              },
              "latLong": "12.96695,77.636887"
            },
            "analytics": {
              
            }
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            "sectionId": "POP_UP_CROUTON_MENU"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            "layout": {
              "rows": 1,
              "columns": 2,
              "horizontalScrollEnabled": true,
              "itemSpacing": 12,
              "lineSpacing": 10,
              "widgetPadding": {
                
              },
              "containerStyle": {
                "containerPadding": {
                  "left": 10,
                  "right": 10,
                  "bottom": 16
                }
              },
              "scrollBar": {
                
              }
            },
            "id": "offerCollectionWidget_UX4",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                "offers": [
                  {
                    "info": {
                      "header": "20% OFF UPTO ₹100",
                      "offerTagColor": "#E46D47",
                      "logoBottom": "rng/md/ads/production/be912a4c543f00172d9f82c033ee7239",
                      "offerIds": [
                        "f88574a4-7975-4671-8de2-045771ca9b9a"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "couponCode": "NO CODE REQUIRED",
                      "description": "ABOVE ₹249",
                      "offerType": "offers",
                      "restId": "280216",
                      "offerLogo": "rng/md/ads/production/be912a4c543f00172d9f82c033ee7239",
                      "descriptionTextColor": "#7302060C"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  },
                  {
                    "info": {
                      "header": "20% OFF UPTO ₹125",
                      "offerTagColor": "#E46D47",
                      "logoBottom": "rng/md/ads/production/4abdba6754dfedb04324150e316a4004",
                      "offerIds": [
                        "16372693-8765-48ee-815c-69e8fda47ca1"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "couponCode": "USE KOTAK125",
                      "description": "ABOVE ₹500",
                      "offerType": "offers",
                      "restId": "280216",
                      "offerLogo": "rng/md/ads/production/4abdba6754dfedb04324150e316a4004",
                      "descriptionTextColor": "#7302060C"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  }
                ]
              }
            }
          }
        }
      },
      {
        "groupedCard": {
          "cardGroupMap": {
            "REGULAR": {
              "cards": [
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      "badges": {
                        
                      },
                      "vegOnlyDetails": {
                        "imageId": "AutoVegOnly_qkjowj",
                        "title": "Showing only vegetarian options.",
                        "description": "Tap on the VEG ONLY button to turn off the setting"
                      },
                      "topRatedFilter": {
                        
                      }
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Bakery",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461873",
                              "name": "Butter Croissant (01 Nos)",
                              "category": "Bakery",
                              "description": "Buttery flaky viennoiserie baked to golden crisp perfection. ",
                              "imageId": "ibopjotvtdd9urynmpio",
                              "inStock": 1,
                              "price": 18500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "95 ratings",
                                  "ratingCountV2": "95"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461883",
                              "name": "Pain Au Chocolate (01 Nos)",
                              "category": "Bakery",
                              "description": "Fresh baked croissant inserted with dark couverture chocolate batons. ",
                              "imageId": "ugrj9pseotjva2jtgrne",
                              "inStock": 1,
                              "price": 19000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "94 ratings",
                                  "ratingCountV2": "94"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "67495797",
                              "name": "Almond Croissant (01 Nos)",
                              "category": "Bakery",
                              "description": "Rich and buttery croissant filled with a sweet frangipan and topped with toasted almond flakes. ",
                              "imageId": "megyy5cmso4ufk3b7dsn",
                              "inStock": 1,
                              "price": 19000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "154 ratings",
                                  "ratingCountV2": "154"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461870",
                              "name": "Caramelized Milk Chocolate Croissant (01 Nos)",
                              "category": "Bakery",
                              "description": "Freshly baked croissant with luscious dulce filling and dipped into gourmand milk chocolate and almonds. ",
                              "imageId": "ziwgoxm8dploue0gdz0h",
                              "inStock": 1,
                              "price": 18500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "104 ratings",
                                  "ratingCountV2": "104"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461871",
                              "name": "Cinnamon Roll (01 Nos)",
                              "category": "Bakery",
                              "description": "Classic sweet sticky roll made using croissant dough and mildly spiced with cinnamon. ",
                              "imageId": "qpwwvowznonmafzckzhl",
                              "inStock": 1,
                              "price": 18500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "79 ratings",
                                  "ratingCountV2": "79"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461861",
                              "name": "Date Caramel Croissant Cubes (01 Nos)",
                              "category": "Bakery",
                              "description": "Cube croissant filled with date caramel syrup and garnished with dark couverture chocolate curls. ",
                              "imageId": "wpgu1lm9nqsilpgbfykz",
                              "inStock": 1,
                              "price": 17500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "19 ratings",
                                  "ratingCountV2": "19"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461863",
                              "name": "Golden Milk & Lemon Coconut Beignets (01 Nos)",
                              "category": "Bakery",
                              "description": "Soft and delectable golden milk berliner stuffed with lemon coconut chantilly",
                              "imageId": "j1mbl8609ssqdvzhxo8i",
                              "inStock": 1,
                              "price": 17500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "72 ratings",
                                  "ratingCountV2": "72"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461835",
                              "name": "Carrot & Muesli Muffin (01 Nos)",
                              "category": "Bakery",
                              "description": "A super healthy muffin loaded with raisins, walnut, almonds, oats in a carrot zucchini cake. ",
                              "imageId": "ovd7ih4dsovh6rcbqpx9",
                              "inStock": 1,
                              "price": 15000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "23 ratings",
                                  "ratingCountV2": "23"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461860",
                              "name": "Chocolate Orange Muffin (01 Nos)",
                              "category": "Bakery",
                              "description": "Delectable leavened dough with chunks of orange marmalade and chocolate callets. ",
                              "imageId": "pclqyliuifj56zhmbs1t",
                              "inStock": 1,
                              "price": 17500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "32 ratings",
                                  "ratingCountV2": "32"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461891",
                              "name": "Peanut Butter & Raspberry Croissant (01 Nos)",
                              "category": "Bakery",
                              "description": "Most delectable croissant sandwich with a peanut butter raspberry spread and topped with salted peanuts and dried raspberries. ",
                              "imageId": "ygdghxv74bqowqflvhsj",
                              "inStock": 1,
                              "price": 20000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "34 ratings",
                                  "ratingCountV2": "34"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461840",
                              "name": "Coffee And Milk Berliner (01 Nos)",
                              "category": "Bakery",
                              "description": "Berliner stuffed with coffee milk chocolate cream and glazed with dark chocolate gourmand. ",
                              "imageId": "ijasvrhdeick3jkgmq51",
                              "inStock": 1,
                              "price": 16000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "98 ratings",
                                  "ratingCountV2": "98"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461910",
                              "name": "Banana And Walnut Tea Cake (01 Nos)",
                              "category": "Bakery",
                              "description": "Soft and moist tea cake made with the magical combination of bananas and walnuts. ",
                              "imageId": "k5vubzkka0jzb5lo7kxc",
                              "inStock": 1,
                              "price": 25000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "43 ratings",
                                  "ratingCountV2": "43"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461865",
                              "name": "Tellicherry Pepper Chicken Puff (01 Nos)",
                              "category": "Bakery",
                              "description": "Freshly baked puff pastry with curried chicken mince filling and topped off with curry leaf powder. ",
                              "imageId": "wwe0vvnehlzt2ae3drmf",
                              "inStock": 1,
                              "price": 17500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "68 ratings",
                                  "ratingCountV2": "68"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461868",
                              "name": "Barbeque And Caramelised Onion Danish (01 Nos)",
                              "category": "Bakery",
                              "description": "Layered croissant dough filled with barbeque tomatoes and caramelised onion and topped with fresh feta. ",
                              "imageId": "wwi36zncydqtmm5dmmqf",
                              "inStock": 1,
                              "price": 18500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "26 ratings",
                                  "ratingCountV2": "26"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461882",
                              "name": "Chicken Balchao Frankfurter Danish (01 Nos)",
                              "category": "Bakery",
                              "description": "Baked croissant dough, topped with tangy balchao paste, grilled chicken frankfurter and garnished with fried onions and leek. ",
                              "imageId": "pb1j9xpxcb3zaf2u8at7",
                              "inStock": 1,
                              "price": 19000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "59 ratings",
                                  "ratingCountV2": "59"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461862",
                              "name": "Ghee Crusted Panko Mushroom Quiche (01 Nos)",
                              "category": "Bakery",
                              "description": "Delectable mushroom quiche crusted with panko crumbs",
                              "imageId": "iukn6di6itgtvu9h6e89",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 17500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "20 ratings",
                                  "ratingCountV2": "20"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461851",
                              "name": "Jalapeno And Cheddar Fondue Berliner (01 Nos)",
                              "category": "Bakery",
                              "description": "Delectable berliner stuffed with melted cheddar cheese fondue and pickled jalapenos, topped off with fried onions",
                              "imageId": "i5dtn8dpfi8f8act7qrz",
                              "inStock": 1,
                              "price": 16000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "26 ratings",
                                  "ratingCountV2": "26"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461881",
                              "name": "Kerala Onion, Ham And Cheddar Croissant (01 Nos)",
                              "category": "Bakery",
                              "description": "Croissant stuffed with ham & cheese and topped off with crispy kerala onion and cheese. ",
                              "imageId": "lbdiag0yf0ak9teye4jc",
                              "inStock": 1,
                              "price": 18500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "80 ratings",
                                  "ratingCountV2": "80"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461857",
                              "name": "Tomato & Basil Quiche (01 Nos)",
                              "category": "Bakery",
                              "description": "A french delicacy thats contains egg, with a tomato basil filling. ",
                              "imageId": "jemnggpjmaz0idrjmxze",
                              "inStock": 1,
                              "price": 16000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "28 ratings",
                                  "ratingCountV2": "28"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461884",
                              "name": "Quiche Lorraine (01 Nos)",
                              "category": "Bakery",
                              "description": "A french classic, with a savoury custard filling, with loads of bacon and cheese. ",
                              "imageId": "z1nd5hoabcssuihjgorq",
                              "inStock": 1,
                              "price": 19000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "19 ratings",
                                  "ratingCountV2": "19"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461867",
                              "name": "Creamy Chicken And Floss Calzone (01 Nos)",
                              "category": "Bakery",
                              "description": "Oven baked fold pizza stuffed with a creamy chicken, garnished with italian seasoning and crispy chicken floss. ",
                              "imageId": "jg7vtwqztlbwq51ivdwj",
                              "inStock": 1,
                              "price": 18000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "24 ratings",
                                  "ratingCountV2": "24"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Breads",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461902",
                              "name": "Sourdough Bread Plain",
                              "category": "Breads",
                              "description": "Slow fermented and artisanal crafted, crusty and flavourful bread. ",
                              "imageId": "a5s7r2jifzziqgsn2gqj",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 22000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "isGuiltfree": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "53 ratings",
                                  "ratingCountV2": "53"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461928",
                              "name": "Sourdough Bread Turmeric Walnut And Flax Seeds",
                              "category": "Breads",
                              "description": "Slow fermented and artisanal crafted, crusty bread with flavours of turmeric, walnuts and flaxseed. ",
                              "imageId": "e4m5qqo212jhmwxhcz3f",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 25000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isGuiltfree": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "8 ratings",
                                  "ratingCountV2": "8"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "62561229",
                              "name": "Baguette",
                              "category": "Breads",
                              "description": "Freshly baked french bread that is soft and porous on the inside while hard and crusty on the outside. ",
                              "imageId": "mhxrmbl8u1iayeko1cac",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 20000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "82 ratings",
                                  "ratingCountV2": "82"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "88784761",
                              "name": "Multigrain Sandwich Jr",
                              "category": "Breads",
                              "description": "Made with the goodness of whole wheat and a whole lot of multigrain, it is still rich, buttery and flaky. ",
                              "imageId": "kjv7an8rzlyypmce0lpv",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 15000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isGuiltfree": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "25 ratings",
                                  "ratingCountV2": "25"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461922",
                              "name": "Multigrain Sandwich",
                              "category": "Breads",
                              "description": "Made with the goodness of whole wheat and a whole lot of multigrain, it is still rich, buttery and flaky. ",
                              "imageId": "ztlrtlrusiyub7bs87cb",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 25000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isGuiltfree": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "9 ratings",
                                  "ratingCountV2": "9"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "88784754",
                              "name": "Babka",
                              "category": "Breads",
                              "description": "A rich sweet braided bread, with flavours of almond and chocolate paste",
                              "imageId": "ou1dhqxthixl3o8rrlzz",
                              "inStock": 1,
                              "price": 25000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "42 ratings",
                                  "ratingCountV2": "42"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461924",
                              "name": "Raspberry And Cumin Sourdough",
                              "category": "Breads",
                              "description": "Slow fermented and artisanal crafted, crusty bread with flavours of raspberry and cumin. ",
                              "imageId": "zo1bvppnrzjmijjrqkvm",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 25000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isGuiltfree": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.8",
                                  "ratingCount": "3 ratings",
                                  "ratingCountV2": "3"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461832",
                              "name": "Milk Bread Jr",
                              "category": "Breads",
                              "description": "Freshly baked and uncut loaf perfect for your everyday sandwich. ",
                              "imageId": "997c5ce1c83e256a2f235ec02beeeb9f",
                              "inStock": 1,
                              "price": 14000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "25 ratings",
                                  "ratingCountV2": "25"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461889",
                              "name": "Milk Bread",
                              "category": "Breads",
                              "description": "Freshly baked and uncut loaf perfect for your everyday sandwich. ",
                              "imageId": "cieovvwlz03uvtodhfc1",
                              "inStock": 1,
                              "price": 22000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "22 ratings",
                                  "ratingCountV2": "22"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "88784747",
                              "name": "Cranberry Orange Millet Whole Wheat Loaf",
                              "category": "Breads",
                              "description": "Super healthy bread loaded with the goodness of whole wheat, dried cranberries, orange marmalade and ragi millet. ",
                              "imageId": "ufteel6iu94i2tj8n1aq",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 25000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isGuiltfree": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "8 ratings",
                                  "ratingCountV2": "8"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Bowl",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461974",
                              "name": "Granola Powerbowl",
                              "category": "Bowl",
                              "description": "Granola with yoghurt, fresh cut fruit and a drizzle of honey",
                              "imageId": "ryzunwj2wvpfartopqfx",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 36000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "59 ratings",
                                  "ratingCountV2": "59"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "69392642",
                              "name": "Seasonal Smoothie Bowl",
                              "category": "Bowl",
                              "description": "Rich fruit smoothie dish topped with cut fruits, granola and honey",
                              "imageId": "ddzt1kyxe2dm0yqdozrb",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 36000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "77 ratings",
                                  "ratingCountV2": "77"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Croissanwich",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97462004",
                              "name": "Bacon Egg And Cheese Croissanwich",
                              "category": "Croissanwich",
                              "description": "Savoury and sweet toppings on two sourdough toasts or filled inside a sliced croissant",
                              "imageId": "rott01jidoph2pfd3c15",
                              "inStock": 1,
                              "price": 42000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "23 ratings",
                                  "ratingCountV2": "23"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461971",
                              "name": "Creamy Chicken Salad Croissanwich",
                              "category": "Croissanwich",
                              "description": "Savoury and sweet toppings on two sourdough toasts or filled inside a sliced croissant",
                              "imageId": "dlds741xtwkkvfzpbk2p",
                              "inStock": 1,
                              "price": 36000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "97 ratings",
                                  "ratingCountV2": "97"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461944",
                              "name": "Creamy Egg Salad Croissanwich",
                              "category": "Croissanwich",
                              "description": "Savoury and sweet toppings on two sourdough toasts or filled inside a sliced croissant",
                              "imageId": "cbtyd1uxp9ym6d8y3xhh",
                              "inStock": 1,
                              "price": 33000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "38 ratings",
                                  "ratingCountV2": "38"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461946",
                              "name": "Pesto Grilled English Vegetable Croissanwich",
                              "category": "Croissanwich",
                              "description": "Savoury and sweet toppings on two sourdough toasts or filled inside a sliced croissant",
                              "imageId": "t1ersvxu6gvnr2ktfeeh",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 33000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "46 ratings",
                                  "ratingCountV2": "46"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      "title": "Beverage",
                      "categories": [
                        {
                          "title": "Coffee",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "54804922",
                                  "name": "Americano",
                                  "category": "Beverage",
                                  "description": "Rich aromatic coffee brewed along with hot water. ",
                                  "imageId": "hovrpzv7rfrhzgpsaydv",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 16000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.7",
                                      "ratingCount": "37 ratings",
                                      "ratingCountV2": "37"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461869",
                                  "name": "Cafe Latte",
                                  "category": "Beverage",
                                  "description": "Freshly brewed espresso balanced with steamed milk and a thin layer of foam. ",
                                  "imageId": "anamt4saylfpcunswryw",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 18500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.9",
                                      "ratingCount": "11 ratings",
                                      "ratingCountV2": "11"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461904",
                                  "name": "Cafe Mocha",
                                  "category": "Beverage",
                                  "description": "A warm infusion of couverture dark chocolate and coffee. ",
                                  "imageId": "mao54nqiejj7ypyqotky",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 24000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "5.0",
                                      "ratingCount": "7 ratings",
                                      "ratingCountV2": "7"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "54804920",
                                  "name": "Cappuccino",
                                  "category": "Beverage",
                                  "description": "Freshly brewed espresso with an equal amount of steamed milk topped with foam. ",
                                  "imageId": "tsbkkzhqmeudnmudikox",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 18500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.8",
                                      "ratingCount": "65 ratings",
                                      "ratingCountV2": "65"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "54804927",
                                  "name": "Cold Coffee",
                                  "category": "Beverage",
                                  "description": "The original iced milk-coffee blended to perfection and served cold. ",
                                  "imageId": "lwc4gijmjrrrzo0m9elg",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 20000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.8",
                                      "ratingCount": "194 ratings",
                                      "ratingCountV2": "194"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461872",
                                  "name": "Cortado",
                                  "category": "Beverage",
                                  "description": "Freshly brewed espresso with a generous helping of warm milk",
                                  "imageId": "d45cfdfe93b50e974d1ae3613a3a3953",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 18500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "54804925",
                                  "name": "Filter Coffee",
                                  "category": "Beverage",
                                  "description": "A rich and aromatic variation of the traditional south indian styled coffee. ",
                                  "imageId": "ighmzpsxbhyqlnyawxvf",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 18500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.9",
                                      "ratingCount": "26 ratings",
                                      "ratingCountV2": "26"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461875",
                                  "name": "Flat White",
                                  "category": "Beverage",
                                  "description": "An espresso dominant beverage topped with velvety foam. ",
                                  "imageId": "wvqmo1xgmso6tuzkvzox",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 18500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "5.0",
                                      "ratingCount": "7 ratings",
                                      "ratingCountV2": "7"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461836",
                                  "name": "Iced Americano",
                                  "category": "Beverage",
                                  "description": "The refreshing goodness of an americano served ice cold. ",
                                  "imageId": "skk6wye7ff7p37pclh6z",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 15000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "54804928",
                                  "name": "Iced Latte",
                                  "category": "Beverage",
                                  "description": "Freshly brewed coffee blended and balanced with cold milk and foam. ",
                                  "imageId": "jxs7dc9bzm4qkp4kkyzw",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 17000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.4",
                                      "ratingCount": "14 ratings",
                                      "ratingCountV2": "14"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "54804929",
                                  "name": "Iced Mocha",
                                  "category": "Beverage",
                                  "description": "The perfect balance of dark chocolate and coffee, served cold. ",
                                  "imageId": "eqi1ng8io8mxina7zn4s",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 19000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.9",
                                      "ratingCount": "19 ratings",
                                      "ratingCountV2": "19"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461828",
                                  "name": "Espresso",
                                  "category": "Beverage",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 12000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461895",
                                  "name": "Vietnamese Iced Coffee",
                                  "category": "Beverage",
                                  "description": "Traditional vietnamese beverage made with freshly brewed coffee and condensed milk. ",
                                  "imageId": "nffxqrima3vnt7mjvaaw",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 20000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.8",
                                      "ratingCount": "63 ratings",
                                      "ratingCountV2": "63"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461886",
                                  "name": "Cold Brew Black",
                                  "category": "Beverage",
                                  "description": "Refreshing cold coffee beverage steeped overnight and served ice cold. ",
                                  "imageId": "fg9bgvhudv26gv9mznda",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 20000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "5.0",
                                      "ratingCount": "5 ratings",
                                      "ratingCountV2": "5"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461818",
                                  "name": "Extra Short Espresso",
                                  "category": "Beverage",
                                  "isVeg": 1,
                                  "price": 5000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461854",
                                  "name": "Macchiato",
                                  "category": "Beverage",
                                  "description": "Freshly brewed espresso with a sparing amount of foamed milk. ",
                                  "isVeg": 1,
                                  "price": 16000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461887",
                                  "name": "Cold Brew Cinnamon",
                                  "category": "Beverage",
                                  "description": "Refreshing cold coffee beverage steeped overnight and flavoured with cinnamon bark. ",
                                  "imageId": "ligvee8pubvaa67v68bv",
                                  "isVeg": 1,
                                  "price": 20000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.8",
                                      "ratingCount": "9 ratings",
                                      "ratingCountV2": "9"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "70554047",
                                  "name": "Cold Brew Mint",
                                  "category": "Beverage",
                                  "description": "Refreshing cold coffee beverage steeped overnight and balanced off with flavours of mint. ",
                                  "imageId": "iiu2dnf4vsnujlfizjcs",
                                  "isVeg": 1,
                                  "price": 20000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "5.0",
                                      "ratingCount": "7 ratings",
                                      "ratingCountV2": "7"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Dairy Delights",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461900",
                                  "name": "Banana Caramel Thickshake",
                                  "category": "Beverage",
                                  "description": "A smooth blend of fresh bananas along with caramel sauce, ice cream and cold milk, served over ice. ",
                                  "imageId": "q13iokuxm99eswfb01rv",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 22000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "5 ratings",
                                      "ratingCountV2": "5"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461901",
                                  "name": "Oreo Thickshake",
                                  "category": "Beverage",
                                  "description": "A smooth blend of oreo cookies along with milk and ice-cream. ",
                                  "imageId": "znfokrx6ls7y7nkr05nd",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 22000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "5 ratings",
                                      "ratingCountV2": "5"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "54804924",
                                  "name": "Belgian Hot Chocolate With Marshmallows",
                                  "category": "Beverage",
                                  "description": "A rich delicious concoction of the finest couverture dark chocolate, steamed with milk and topped with marshmallows. ",
                                  "imageId": "arp2ffik6q0avtlyyzh1",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 25000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.8",
                                      "ratingCount": "217 ratings",
                                      "ratingCountV2": "217"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461927",
                                  "name": "Signature Chocolate Shake",
                                  "category": "Beverage",
                                  "description": "Lavonne signature chocolate cake blended along with ice-cream, chocolate ganache and cold milk. ",
                                  "imageId": "yvslbhvkhvw5amlqibni",
                                  "isVeg": 1,
                                  "price": 25000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.9",
                                      "ratingCount": "11 ratings",
                                      "ratingCountV2": "11"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Refreshers",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "54804882",
                                  "name": "Orange Juice",
                                  "category": "Beverage",
                                  "description": "Slow and fresh pressed orange juice, with no added sugar. ",
                                  "imageId": "i82fm7do0sneag0nlpqx",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 20000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.8",
                                      "ratingCount": "123 ratings",
                                      "ratingCountV2": "123"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461899",
                                  "name": "Watermelon Fruit Juice",
                                  "category": "Beverage",
                                  "description": "Slow and fresh pressed watermelon juice, with no added sugar. ",
                                  "imageId": "cozu3oxv5aohulpi5yie",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 20000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "8 ratings",
                                      "ratingCountV2": "8"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "120994456",
                                  "name": "Earlgrey Lavender Kombucha",
                                  "category": "Beverage",
                                  "imageId": "6faa48a27480c3b32f8b1b53a4a8ddc3",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 23810,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "120994453",
                                  "name": "Ginger Kombucha",
                                  "category": "Beverage",
                                  "imageId": "ae2cd0991161ae2b09a32813367da2aa",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 23810,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "120994454",
                                  "name": "Peach Kombucha",
                                  "category": "Beverage",
                                  "imageId": "eb2f8e285f81f3e3b2477feae704955c",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 23810,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461894",
                                  "name": "Tender Coconut Cooler",
                                  "category": "Beverage",
                                  "description": "Cool and fresh tender coconut water whipped with delicate coconut flesh",
                                  "imageId": "v67zmtekedhab7svg0bd",
                                  "isVeg": 1,
                                  "price": 20000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCount": "12 ratings",
                                      "ratingCountV2": "12"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "54804891",
                                  "name": "Pineapple Juice",
                                  "category": "Beverage",
                                  "description": "Slow and fresh pressed pineapple juice, with no added sugar. ",
                                  "imageId": "kqwugv5pfkjindbvce4s",
                                  "isVeg": 1,
                                  "price": 20000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Smoothies",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "54804930",
                                  "name": "Blueberry Smoothie",
                                  "category": "Beverage",
                                  "description": "A smooth blend of yoghurt, blueberry puree, ice-cream and milk",
                                  "imageId": "ddcp8hubcz84i9bdjgwp",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 25000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.9",
                                      "ratingCount": "49 ratings",
                                      "ratingCountV2": "49"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461929",
                                  "name": "Strawberry Smoothie",
                                  "category": "Beverage",
                                  "description": "A smooth blend of yoghurt, strawberry puree, ice-cream and milk",
                                  "imageId": "g5tlddy67uphx6rvfkzo",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 25000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "54804931",
                                  "name": "Banana Peanut Butter Smoothie",
                                  "category": "Beverage",
                                  "description": "A smooth blend of yoghurt, fresh bananas, peanut butter, ice-cream and milk. ",
                                  "imageId": "eclgggjfzgffajktfwlp",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 25000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.7",
                                      "ratingCount": "19 ratings",
                                      "ratingCountV2": "19"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461919",
                                  "name": "Mixed Berry Smoothie",
                                  "category": "Beverage",
                                  "description": "A smooth blend of yohurt, blueberry and strawberry puree, ice cream and milk",
                                  "imageId": "yfpsydyotuvhrqryrkbn",
                                  "isVeg": 1,
                                  "price": 25000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.8",
                                      "ratingCount": "5 ratings",
                                      "ratingCountV2": "5"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Tea",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461888",
                                  "name": "Lemon Iced Tea",
                                  "category": "Beverage",
                                  "imageId": "twbrtlbxb5m8jyxbcyjl",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 20000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "5.0",
                                      "ratingCount": "5 ratings",
                                      "ratingCountV2": "5"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461890",
                                  "name": "Peach Iced Tea",
                                  "category": "Beverage",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 20000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "5.0",
                                      "ratingCount": "5 ratings",
                                      "ratingCountV2": "5"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "54804926",
                                  "name": "Pulled Chai",
                                  "category": "Beverage",
                                  "description": "A popular hot milk-tea beverage made by pouring the tea back and forth briskly while aerating it to make it smoother and creamier. ",
                                  "imageId": "f7aokqsreunpjerwphsr",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 18500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.9",
                                      "ratingCount": "19 ratings",
                                      "ratingCountV2": "19"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      "title": "Pastry",
                      "categories": [
                        {
                          "title": "Pastry Products",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97462063",
                                  "name": "Tiramisu (280gms)",
                                  "category": "Pastry",
                                  "description": "Most elegant italian dessert, blending in the bold flavours of espresso, rich cocoa and gorgeous mascarpone all layered between the lightest savoiardi sponge. ",
                                  "imageId": "o1cpvdvgt7tjeavcjv5z",
                                  "inStock": 1,
                                  "price": 70000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.8",
                                      "ratingCount": "64 ratings",
                                      "ratingCountV2": "64"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461866",
                                  "name": "Brownie (1 Nos)",
                                  "category": "Pastry",
                                  "description": "Dense and fudgy chocolate brownie squares, topped with a sprinkle of sea salt to balance off the rich flavours. ",
                                  "imageId": "ig4sr6ex8cggol1owk4x",
                                  "inStock": 1,
                                  "price": 18000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.9",
                                      "ratingCount": "33 ratings",
                                      "ratingCountV2": "33"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97462018",
                                  "name": "Chocolate Cup Cake (4 Pcs)",
                                  "category": "Pastry",
                                  "description": "Rich and delicate chocolate cupcake, swirled with lip smacking chocolate ganache and topped off with shaved chocolate",
                                  "imageId": "roljohrjzvxslm8666an",
                                  "inStock": 1,
                                  "price": 44000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.7",
                                      "ratingCount": "26 ratings",
                                      "ratingCountV2": "26"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97462044",
                                  "name": "7 Seven Chocolate Mousse Cake (270gms)",
                                  "category": "Pastry",
                                  "description": "Rich and velvety chocolate mousse cake with chocolate crumble and dark chocolate ganache",
                                  "imageId": "uj3txl16293oniliqboc",
                                  "inStock": 1,
                                  "price": 50000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "49 ratings",
                                      "ratingCountV2": "49"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461939",
                                  "name": "Signature Chocolate Cake (01 Nos)",
                                  "category": "Pastry",
                                  "description": "Lavonne?s classic signature chocolate cake with layers of chocolate sponge and chocolate cream enclosed in a decadent chocolate mousse",
                                  "imageId": "espycxszxulzx28igbhj",
                                  "inStock": 1,
                                  "price": 30000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.7",
                                      "ratingCount": "33 ratings",
                                      "ratingCountV2": "33"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "100038276",
                                  "name": "Citrus Carrot Cake (01 Nos)",
                                  "category": "Pastry",
                                  "description": "Carrot cake baked with a crunchy buttery crumble topped with hazelnut praline and caramelised white chocolate cheese cremeux and orange gel",
                                  "imageId": "m7ecybhhtxfivofsjpev",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 30000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.8",
                                      "ratingCount": "19 ratings",
                                      "ratingCountV2": "19"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "100038275",
                                  "name": "All Things Coffee (01 Nos)",
                                  "category": "Pastry",
                                  "description": "Coffee cake with coffee cremeux , white chocolate coffee mousse and choux pastry filled with coffee pastry cream. ",
                                  "imageId": "j5lfhes8vwjd19bals3z",
                                  "inStock": 1,
                                  "price": 30000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "6 ratings",
                                      "ratingCountV2": "6"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "100038282",
                                  "name": "Masala Chai Tres Leche (01 Nos)",
                                  "category": "Pastry",
                                  "description": "Chai soaked tres leche cake with chai mousse and chai infused milk chocolate cremeux",
                                  "imageId": "sft5qax8ddrlmgnuu7qi",
                                  "inStock": 1,
                                  "price": 30000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.9",
                                      "ratingCount": "10 ratings",
                                      "ratingCountV2": "10"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "100038278",
                                  "name": "Black Forest Entremet (01nos)",
                                  "category": "Pastry",
                                  "description": "Chocolate cake layered with vanilla creme topped with a chocolate mousse and cherry compote to make it the best version of a blackforest",
                                  "imageId": "s2ov0rskzfqevjmkeeem",
                                  "inStock": 1,
                                  "price": 33000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "10 ratings",
                                      "ratingCountV2": "10"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "100038277",
                                  "name": "Chocolate & Caramel Magnum (01 Nos)",
                                  "category": "Pastry",
                                  "description": "Decadent chocolate cake with soft caramel topped with dark chocolate mousse and chocolate cream",
                                  "imageId": "hcxxr6luykeyj6vtxq3h",
                                  "inStock": 1,
                                  "price": 33000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.7",
                                      "ratingCount": "12 ratings",
                                      "ratingCountV2": "12"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "100038283",
                                  "name": "Mango Hazelnut Petit Gâteau (01 Nos)",
                                  "category": "Pastry",
                                  "description": "Hazelnut cake with mango compote, hazelnut praline and caramelised milk chocolate mousse",
                                  "imageId": "mwtjimev0362llv7xbwy",
                                  "inStock": 1,
                                  "price": 33000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "11 ratings",
                                      "ratingCountV2": "11"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "100038279",
                                  "name": "Classic Pineapple & Coconut (01 Nos)",
                                  "category": "Pastry",
                                  "description": "Vanilla cake with pineapple confit , coconut mousse topped with lime vanilla namelaka",
                                  "imageId": "mov0ibgjpq7ne7a3bfiz",
                                  "inStock": 1,
                                  "price": 33000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.7",
                                      "ratingCount": "7 ratings",
                                      "ratingCountV2": "7"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "100038281",
                                  "name": "Tropical Petit Gâteau (01 Nos)",
                                  "category": "Pastry",
                                  "description": "Olive oil lime cake with passion fruit curd and coconut mousse topped with exotic fruit confit. ",
                                  "imageId": "zuy1klkybdl7lpsipd2y",
                                  "inStock": 1,
                                  "price": 35000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "10 ratings",
                                      "ratingCountV2": "10"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "100038280",
                                  "name": "Banana Caramel Cheese Cake (01 Nos)",
                                  "category": "Pastry",
                                  "description": "Cheesecake with banana pastry cream and banana cake topped with vanilla whipped chantilly and salted soft carame",
                                  "imageId": "tnecyozkavjjj0iyrzyp",
                                  "inStock": 1,
                                  "price": 35000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.7",
                                      "ratingCount": "12 ratings",
                                      "ratingCountV2": "12"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "100038285",
                                  "name": "Vegan Chocolate Raspberry Cake (01 Nos)",
                                  "category": "Pastry",
                                  "description": "Vegan chocolate cake with raspberry confit , vegan dark chocolate mousse and coconut cremeux topped with raspberry gel",
                                  "imageId": "uvfoxs0y2n4pngdgww1j",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 35000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "22 ratings",
                                      "ratingCountV2": "22"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "100038284",
                                  "name": "Pistachio Baklava (01 Nos)",
                                  "category": "Pastry",
                                  "description": "Pistachio tres leche with pistachio cremeux , honey mousse with raspberry gel and baklava",
                                  "imageId": "gznd6lknlt3g7vx0tpls",
                                  "inStock": 1,
                                  "price": 35000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "20 ratings",
                                      "ratingCountV2": "20"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "115623279",
                                  "name": "Mango Cheese Cake",
                                  "category": "Pastry",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 35000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "5 ratings",
                                      "ratingCountV2": "5"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "115623282",
                                  "name": "Mostly Mango",
                                  "category": "Pastry",
                                  "inStock": 1,
                                  "isVeg": 1,
                                  "price": 80000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      "title": "Hot Kitchen",
                      "categories": [
                        {
                          "title": "Add-on",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461827",
                                  "name": "Crispy Bacon",
                                  "category": "Hot Kitchen",
                                  "imageId": "2286c7d6098f95a092f2fc5bee332cb9",
                                  "price": 12000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461830",
                                  "name": "Grill Veg",
                                  "category": "Hot Kitchen",
                                  "isVeg": 1,
                                  "price": 12000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461829",
                                  "name": "Grill Chicken",
                                  "category": "Hot Kitchen",
                                  "price": 12000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "97461823",
                                  "name": "Grilled Vegetables",
                                  "category": "Hot Kitchen",
                                  "isVeg": 1,
                                  "price": 9000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Salad",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461983",
                              "name": "Bruleed Figs And Roast Beets With Fresh Buffalo Mozzarella Basil And Arugula",
                              "category": "Salad",
                              "imageId": "sezlhghkkt046mp3uapx",
                              "isVeg": 1,
                              "price": 40000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "78 ratings",
                                  "ratingCountV2": "78"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461978",
                              "name": "Grilled English Vegetable Salad With Crumbled Feta",
                              "category": "Salad",
                              "imageId": "gy5iwrdymwakj1ml47sd",
                              "isVeg": 1,
                              "price": 37000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "38 ratings",
                                  "ratingCountV2": "38"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461991",
                              "name": "Seasonal Cold Fruit Salad With Fresh Herbs And Candied Walnuts",
                              "category": "Salad",
                              "imageId": "bp2vzyzrcfytjwlvfh0q",
                              "isVeg": 1,
                              "price": 40000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "49 ratings",
                                  "ratingCountV2": "49"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461995",
                              "name": "Slice Tenderloin Salad With Arugula In Orange Mustard Vinaigrette",
                              "category": "Salad",
                              "imageId": "qxnlbl7fv5ajbroefcsb",
                              "price": 40000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "8 ratings",
                                  "ratingCountV2": "8"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97462009",
                              "name": "Grilled Chicken With Charred Pineapple Salad",
                              "category": "Salad",
                              "imageId": "bwf7jit1n21ykbr8tyvm",
                              "price": 42000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "5.0",
                                  "ratingCount": "36 ratings",
                                  "ratingCountV2": "36"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97462021",
                              "name": "Hearty Cobb Salad With Chicken, Boiled Eggs And Bacon",
                              "category": "Salad",
                              "imageId": "o7mwc1pibpyh4uz81hvx",
                              "price": 44000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "23 ratings",
                                  "ratingCountV2": "23"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Burgers",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97462045",
                              "name": "Bbq Pulled Pork With Sliced Green Apples Burger",
                              "category": "Burgers",
                              "imageId": "ac7n0qrj0m9dagn8uai3",
                              "price": 51000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "4 ratings",
                                  "ratingCountV2": "4"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97462048",
                              "name": "Grilled Buff Tenderloin Bulgogi With Caramelized Onions And Gochujang Paste Burger",
                              "category": "Burgers",
                              "imageId": "xoietaygo3jagq8gmtv8",
                              "price": 53000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "5 ratings",
                                  "ratingCountV2": "5"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97462030",
                              "name": "Fried Spicy Chicken With Coleslaw Burger",
                              "category": "Burgers",
                              "imageId": "exdtfbbtpztun4gaswdl",
                              "price": 48000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "21 ratings",
                                  "ratingCountV2": "21"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97462050",
                              "name": "Double Buff Patty Cheese Burger With Bacon And Fried Egg",
                              "category": "Burgers",
                              "imageId": "yi6c3wrnfedfvqg7hjwg",
                              "price": 58000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.1",
                                  "ratingCount": "5 ratings",
                                  "ratingCountV2": "5"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97462029",
                              "name": "Crispy Wasabi Prawn Po Boy Burger",
                              "category": "Burgers",
                              "imageId": "wa93ofmidg75oxtuvhmn",
                              "price": 48000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "4 ratings",
                                  "ratingCountV2": "4"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97462038",
                              "name": "Single Patty Cheese Burger With Bacon And Fried Egg",
                              "category": "Burgers",
                              "imageId": "imykucbeyihjg0omjezc",
                              "price": 48000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "28 ratings",
                                  "ratingCountV2": "28"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Sandwiches",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461989",
                              "name": "Grilled Chicken With Fresh Tomatoes And Mozzarella Sandwich",
                              "category": "Sandwiches",
                              "imageId": "m82ptwj8dxprgllhb5st",
                              "price": 40000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "20 ratings",
                                  "ratingCountV2": "20"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97462006",
                              "name": "Crispy Bacon, Egg And Cheese With Mustard Mayo Sandwich",
                              "category": "Sandwiches",
                              "imageId": "ufcv9c5j4z1vsahxeyxc",
                              "price": 42000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "9 ratings",
                                  "ratingCountV2": "9"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461972",
                              "name": "English Vegetables With Sun Dried Tomatoes, Mozarella And Pesto Mayo Sandwich",
                              "category": "Sandwiches",
                              "imageId": "r1cwbfkkqtpz9uipnlwb",
                              "isVeg": 1,
                              "price": 36000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "9 ratings",
                                  "ratingCountV2": "9"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Pasta",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97462014",
                              "name": "Basil Pesto Spaghetti With Grilled Vegetables And Bacconcini",
                              "category": "Pasta",
                              "imageId": "zzmi5lh3nbkiuqh8hgv7",
                              "isVeg": 1,
                              "price": 44000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "3 ratings",
                                  "ratingCountV2": "3"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97462015",
                              "name": "Browned Butter And Sage Fettuccine With Sliced Shitake Mushrooms And Parmesan Breadcrumbs",
                              "category": "Pasta",
                              "imageId": "zqnhjvtd5o2duuo08o6d",
                              "isVeg": 1,
                              "price": 44000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "76 ratings",
                                  "ratingCountV2": "76"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97462010",
                              "name": "Penne Alfredo With Grilled Vegetables And Bocconcini",
                              "category": "Pasta",
                              "imageId": "yrkqadxiz8efw7umxrtw",
                              "isVeg": 1,
                              "price": 42000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "6 ratings",
                                  "ratingCountV2": "6"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97462022",
                              "name": "Penne In Browned Bechamel With Shitake And Button Mushrooms And Sun Dried Tomatoes",
                              "category": "Pasta",
                              "imageId": "oct4wqvwxzuz0jkiopku",
                              "isVeg": 1,
                              "price": 46000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "12 ratings",
                                  "ratingCountV2": "12"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97462002",
                              "name": "Penne With Roast Eggplant, Bell Peppers, Olives, Sun Dried Tomatoes And Parmesan Breadcrumbs",
                              "category": "Pasta",
                              "imageId": "r1jbxhgoistmo9ermosw",
                              "isVeg": 1,
                              "price": 41000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "54804917",
                              "name": "Spaghetti Alla Puttanesca",
                              "category": "Pasta",
                              "imageId": "nz4qcweuuo8smasbiosj",
                              "isVeg": 1,
                              "price": 40000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "40 ratings",
                                  "ratingCountV2": "40"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97462026",
                              "name": "Bacon And Shrimps Fettuccine With Wilted Greens In Creamy Bechamel",
                              "category": "Pasta",
                              "imageId": "hmpyyfzg7selpgnity1a",
                              "price": 48000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "5.0",
                                  "ratingCount": "11 ratings",
                                  "ratingCountV2": "11"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "97461981",
                              "name": "Spaghetti Aglio E Olio",
                              "category": "Pasta",
                              "imageId": "xul44cjqha0kiykasamr",
                              "isVeg": 1,
                              "price": 39000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "nextAvailableAtMessage": "Next available at 8:30 am, tomorrow",
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "88 ratings",
                                  "ratingCountV2": "88"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      "type": "FSSAI",
                      "imageId": "fssai_final_edss9i",
                      "text": [
                        "License No. 11219333001098"
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      "name": "Lavonne",
                      "area": "Indiranagar",
                      "completeAddress": "2nd Phase, #263, 3rd Cross Rd, Stage 2, Domlur, Bengaluru, Karnataka 560071"
                    }
                  }
                }
              ]
            }
          }
        }
      }
    ],
    "firstOffsetRequest": true,
    "isQCLink": false
  },
  "tid": "30b880a3-a6a0-4d89-8fd2-f94ba73c9406",
  "sid": "928ceb62-12b1-4d90-b779-fe5d4d83c8d8",
  "deviceId": "4dfd2575-70a1-5f85-f782-52ee4ff9f768",
  "csrfToken": "UfV5eCAFNi7o--HMXS0sar3QMUfH33RXHe1Z719k"
}
]