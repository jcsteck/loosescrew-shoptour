TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "partial": false,
  "hfovMax": 80,
  "cardboardMenu": {
   "opacity": 0.4,
   "fontColor": "#FFFFFF",
   "fontFamily": "Arial",
   "selectedBackgroundColor": "#202020",
   "rollOverOpacity": 0.8,
   "rollOverFontColor": "#FFFFFF",
   "class": "Menu",
   "label": "Media",
   "backgroundColor": "#404040",
   "id": "Menu_23CF51E1_3F86_EDAC_41AC_D2FFEC3ECD9C",
   "rollOverBackgroundColor": "#000000",
   "children": [
    {
     "class": "MenuItem",
     "label": "lobby_t_b",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": "PIC_20190904_173417_20190906091310",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "PIC_20190904_173836_20190906091230",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "class": "MenuItem",
     "label": "PIC_20190904_174337_20191105171142_edited",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "class": "MenuItem",
     "label": "PIC_20190904_175845_20191105172713_edited",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "class": "MenuItem",
     "label": "PIC_20190904_180914_edited",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    }
   ],
   "selectedFontColor": "#FFFFFF"
  },
  "id": "panorama_C6BA52EA_C88C_8751_41D3_B64BC0E34638",
  "thumbnailUrl": "media/panorama_C6BA52EA_C88C_8751_41D3_B64BC0E34638_t.jpg",
  "pitch": 0,
  "label": "lobby_t_b",
  "class": "Panorama",
  "hfovMin": 80,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfov": 360,
     "partial": false,
     "hfovMax": 80,
     "cardboardMenu": "this.Menu_23CF51E1_3F86_EDAC_41AC_D2FFEC3ECD9C",
     "id": "panorama_C36EB689_C8BD_8FD3_41DD_52430BCA172E",
     "thumbnailUrl": "media/panorama_C36EB689_C8BD_8FD3_41DD_52430BCA172E_t.jpg",
     "pitch": 0,
     "label": "PIC_20190904_173417_20190906091310",
     "class": "Panorama",
     "hfovMin": 80,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_C6BA52EA_C88C_8751_41D3_B64BC0E34638",
       "backwardYaw": -158.83,
       "yaw": -73.79,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfov": 360,
        "partial": false,
        "hfovMax": 80,
        "cardboardMenu": "this.Menu_23CF51E1_3F86_EDAC_41AC_D2FFEC3ECD9C",
        "id": "panorama_315576BE_3D82_5797_41C7_BD1B7C479D25",
        "thumbnailUrl": "media/panorama_315576BE_3D82_5797_41C7_BD1B7C479D25_t.jpg",
        "pitch": 0,
        "label": "PIC_20190904_173836_20190906091230",
        "class": "Panorama",
        "hfovMin": 80,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "hfov": 360,
           "partial": false,
           "hfovMax": 80,
           "cardboardMenu": "this.Menu_23CF51E1_3F86_EDAC_41AC_D2FFEC3ECD9C",
           "id": "panorama_30F5B631_3D82_36AC_41B8_51140C97D189",
           "thumbnailUrl": "media/panorama_30F5B631_3D82_36AC_41B8_51140C97D189_t.jpg",
           "pitch": 0,
           "label": "PIC_20190904_174337_20191105171142_edited",
           "class": "Panorama",
           "hfovMin": 80,
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "hfov": 360,
              "partial": false,
              "hfovMax": 80,
              "cardboardMenu": "this.Menu_23CF51E1_3F86_EDAC_41AC_D2FFEC3ECD9C",
              "id": "panorama_334C23E2_3E81_EDAC_41CC_8C3582CCBB52",
              "thumbnailUrl": "media/panorama_334C23E2_3E81_EDAC_41CC_8C3582CCBB52_t.jpg",
              "pitch": 0,
              "label": "PIC_20190904_175845_20191105172713_edited",
              "class": "Panorama",
              "hfovMin": 80,
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_30F5B631_3D82_36AC_41B8_51140C97D189",
                "backwardYaw": 98.92,
                "yaw": -130.44,
                "distance": 1
               }
              ],
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "snapshots": [
                 {
                  "class": "PanoramaSnapshot",
                  "position": {
                   "class": "PanoramaCameraPosition",
                   "hfov": 80,
                   "yaw": 0,
                   "pitch": 0
                  },
                  "id": "snapshot_32BC75DB_3E82_359C_41CB_7587702FDDD8",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 1500,
                     "width": 1500,
                     "url": "media/snapshot_32BC75DB_3E82_359C_41CB_7587702FDDD8.jpg"
                    }
                   ]
                  }
                 }
                ],
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "id": "overlay_312F1654_3E86_D6EB_41CA_EFA8BE7E24AD",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_30F5B631_3D82_36AC_41B8_51140C97D189, this.camera_23CBB1EC_3F86_EDB4_41CD_FD226F5E3668); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 120,
                       "width": 171,
                       "url": "media/panorama_334C23E2_3E81_EDAC_41CC_8C3582CCBB52_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": -130.44,
                    "hfov": 19.2,
                    "pitch": -2.89
                   }
                  ],
                  "items": [
                   {
                    "yaw": -130.44,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 19.2,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 240,
                       "width": 343,
                       "url": "media/panorama_334C23E2_3E81_EDAC_41CC_8C3582CCBB52_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -2.89
                   }
                  ]
                 },
                 {
                  "class": "LensFlarePanoramaOverlay",
                  "bleachingDistance": 0.4,
                  "id": "overlay_2EE75A29_3E83_DEBD_41C8_7CDE98D0C2F0",
                  "bleaching": 0.7,
                  "yaw": 82.02,
                  "pitch": 25.94
                 },
                 {
                  "class": "LensFlarePanoramaOverlay",
                  "bleachingDistance": 0.4,
                  "id": "overlay_2EE32F0A_3E83_D67F_41A2_672CB9D8E385",
                  "bleaching": 0.7,
                  "yaw": 104.63,
                  "pitch": 27.19
                 },
                 {
                  "class": "LensFlarePanoramaOverlay",
                  "bleachingDistance": 0.4,
                  "id": "overlay_2EEF62E3_3E83_EFAC_41C3_9F28914E733A",
                  "bleaching": 0.7,
                  "yaw": 164.68,
                  "pitch": 30.71
                 },
                 {
                  "class": "LensFlarePanoramaOverlay",
                  "bleachingDistance": 0.67,
                  "id": "overlay_2E581A03_3E82_7E6D_41B0_08950895F02A",
                  "bleaching": 0.7,
                  "yaw": 129,
                  "pitch": -2.7
                 }
                ],
                "thumbnailUrl": "media/panorama_334C23E2_3E81_EDAC_41CC_8C3582CCBB52_t.jpg",
                "stereoSphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 6434,
                   "width": 6434,
                   "url": "media/panorama_334C23E2_3E81_EDAC_41CC_8C3582CCBB52_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 3999,
                   "width": 3999,
                   "url": "media/panorama_334C23E2_3E81_EDAC_41CC_8C3582CCBB52.jpeg"
                  }
                 ]
                }
               }
              ]
             },
             "backwardYaw": -130.44,
             "yaw": 98.92,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_315576BE_3D82_5797_41C7_BD1B7C479D25",
             "backwardYaw": 44.41,
             "yaw": -18.27,
             "distance": 1
            }
           ],
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "snapshots": [
              {
               "class": "PanoramaSnapshot",
               "position": {
                "class": "PanoramaCameraPosition",
                "hfov": 80,
                "yaw": 0,
                "pitch": 0
               },
               "id": "snapshot_31EC27F7_3D82_5594_4197_9AC0BC24AC71",
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "height": 1500,
                  "width": 1500,
                  "url": "media/snapshot_31EC27F7_3D82_5594_4197_9AC0BC24AC71.jpg"
                 }
                ]
               }
              }
             ],
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "id": "overlay_33ACA47E_3E86_6A97_41A6_71CB7716751E",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_334C23E2_3E81_EDAC_41CC_8C3582CCBB52, this.camera_23F3E1FC_3F86_ED94_41C8_84B44FE3866E); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 77,
                    "width": 135,
                    "url": "media/panorama_30F5B631_3D82_36AC_41B8_51140C97D189_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": 98.92,
                 "hfov": 15.2,
                 "pitch": -1.26
                }
               ],
               "items": [
                {
                 "yaw": 98.92,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 15.2,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 155,
                    "width": 271,
                    "url": "media/panorama_30F5B631_3D82_36AC_41B8_51140C97D189_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -1.26
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "id": "overlay_30CCFDB0_3E8E_35AC_41C7_C7C0158BE52C",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_315576BE_3D82_5797_41C7_BD1B7C479D25, this.camera_23FEA204_3F86_EE74_41CC_A05102531E9E); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 66,
                    "width": 151,
                    "url": "media/panorama_30F5B631_3D82_36AC_41B8_51140C97D189_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -18.27,
                 "hfov": 16.88,
                 "pitch": -5.66
                }
               ],
               "items": [
                {
                 "yaw": -18.27,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 16.88,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 132,
                    "width": 303,
                    "url": "media/panorama_30F5B631_3D82_36AC_41B8_51140C97D189_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -5.66
                }
               ]
              },
              {
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "id": "overlay_319A3496_3E83_EB97_41B0_034D2C4DF73C",
               "bleaching": 0.7,
               "yaw": -100.36,
               "pitch": 81.71
              },
              {
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "id": "overlay_318768EB_3E83_DBBC_41C6_D8F469907B7A",
               "bleaching": 0.7,
               "yaw": -20.98,
               "pitch": 41.26
              },
              {
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.65,
               "id": "overlay_318999EA_3E82_3DBC_41BD_950718B1944F",
               "bleaching": 0.7,
               "yaw": -129.25,
               "pitch": -6.72
              },
              {
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.77,
               "id": "overlay_2E6BF52C_3E82_2AB4_41B5_C9C1406A1F11",
               "bleaching": 0.7,
               "yaw": -55.14,
               "pitch": 3.33
              }
             ],
             "thumbnailUrl": "media/panorama_30F5B631_3D82_36AC_41B8_51140C97D189_t.jpg",
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 6434,
                "width": 6434,
                "url": "media/panorama_30F5B631_3D82_36AC_41B8_51140C97D189_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 3999,
                "width": 3999,
                "url": "media/panorama_30F5B631_3D82_36AC_41B8_51140C97D189.jpeg"
               }
              ]
             }
            }
           ]
          },
          "backwardYaw": -18.27,
          "yaw": 44.41,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_C36EB689_C8BD_8FD3_41DD_52430BCA172E",
          "backwardYaw": -148.98,
          "yaw": -114.11,
          "distance": 1
         }
        ],
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "snapshots": [
           {
            "class": "PanoramaSnapshot",
            "position": {
             "class": "PanoramaCameraPosition",
             "hfov": 80,
             "yaw": 67.03,
             "pitch": -12.2
            },
            "id": "snapshot_C2BEB14C_C8BD_8550_41E4_D829DB759DA9",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 1500,
               "width": 1500,
               "url": "media/snapshot_C2BEB14C_C8BD_8550_41E4_D829DB759DA9.jpg"
              }
             ]
            }
           }
          ],
          "overlays": [
           {
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "id": "overlay_C4E865D8_C883_8D71_41C7_DD6A620A9015",
            "bleaching": 0.14,
            "yaw": 86.55,
            "pitch": 64.63
           },
           {
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "id": "overlay_C4C47876_C883_8331_41E2_2E7069D1207B",
            "bleaching": 0.19,
            "yaw": 131.26,
            "pitch": 65.38
           },
           {
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.73,
            "id": "overlay_C4D0EBB8_C883_8531_41C8_0C0C96335035",
            "bleaching": 0.08,
            "yaw": -147.09,
            "pitch": 33.98
           },
           {
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "id": "overlay_30AF40FE_3D86_6B97_41B2_F3AD03CE1582",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_30F5B631_3D82_36AC_41B8_51140C97D189, this.camera_23E8B21C_3F86_EE94_41CA_38410B1495FC); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 93,
                 "width": 158,
                 "url": "media/panorama_315576BE_3D82_5797_41C7_BD1B7C479D25_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "yaw": 44.41,
              "hfov": 17.6,
              "pitch": -6.66
             }
            ],
            "items": [
             {
              "yaw": 44.41,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 17.6,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 186,
                 "width": 316,
                 "url": "media/panorama_315576BE_3D82_5797_41C7_BD1B7C479D25_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -6.66
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "id": "overlay_3171864F_3D86_D6F4_41B4_A024CBDFE805",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 5)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 95,
                 "width": 144,
                 "url": "media/panorama_315576BE_3D82_5797_41C7_BD1B7C479D25_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "yaw": 117.76,
              "hfov": 16.17,
              "pitch": -4.02
             }
            ],
            "items": [
             {
              "yaw": 117.76,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 16.17,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 190,
                 "width": 289,
                 "url": "media/panorama_315576BE_3D82_5797_41C7_BD1B7C479D25_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -4.02
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "id": "overlay_30986229_3E82_6EBC_41C5_A15A51E19559",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_C36EB689_C8BD_8FD3_41DD_52430BCA172E, this.camera_23116225_3F86_EEB4_41AD_F45107F94A2D); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 100,
                 "width": 200,
                 "url": "media/panorama_315576BE_3D82_5797_41C7_BD1B7C479D25_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "yaw": -114.11,
              "hfov": 15.18,
              "pitch": -49.24
             }
            ],
            "items": [
             {
              "yaw": -114.11,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 15.18,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 208,
                 "width": 415,
                 "url": "media/panorama_315576BE_3D82_5797_41C7_BD1B7C479D25_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -49.24
             }
            ]
           },
           {
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.57,
            "id": "overlay_2E2BCBE8_3E82_7DBC_41C8_55C1C38A9E5C",
            "bleaching": 0.7,
            "yaw": 81.02,
            "pitch": -0.19
           }
          ],
          "thumbnailUrl": "media/panorama_315576BE_3D82_5797_41C7_BD1B7C479D25_t.jpg",
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 6434,
             "width": 6434,
             "url": "media/panorama_315576BE_3D82_5797_41C7_BD1B7C479D25_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 3999,
             "width": 3999,
             "url": "media/panorama_315576BE_3D82_5797_41C7_BD1B7C479D25.jpeg"
            }
           ]
          }
         }
        ]
       },
       "backwardYaw": -114.11,
       "yaw": -148.98,
       "distance": 1
      }
     ],
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "snapshots": [
        {
         "class": "PanoramaSnapshot",
         "position": {
          "class": "PanoramaCameraPosition",
          "hfov": 80,
          "yaw": 140.04,
          "pitch": 9.17
         },
         "id": "snapshot_C2BFB541_C8BD_8D53_41E0_7FD39AECC066",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 1500,
            "width": 1500,
            "url": "media/snapshot_C2BFB541_C8BD_8D53_41E0_7FD39AECC066.jpg"
           }
          ]
         }
        }
       ],
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "id": "overlay_C5828BBC_C885_8530_41E2_ABD9EF81F3B1",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_315576BE_3D82_5797_41C7_BD1B7C479D25, this.camera_23E2D214_3F86_EE94_41B9_AF33E37B0044); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 16,
              "width": 29,
              "url": "media/panorama_C36EB689_C8BD_8FD3_41DD_52430BCA172E_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "yaw": -148.98,
           "hfov": 33.79,
           "pitch": 6.07
          }
         ],
         "items": [
          {
           "yaw": -148.98,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 33.79,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 393,
              "width": 725,
              "url": "media/panorama_C36EB689_C8BD_8FD3_41DD_52430BCA172E_0_HS_0_0.png"
             }
            ]
           },
           "pitch": 6.07
          }
         ]
        },
        {
         "class": "LensFlarePanoramaOverlay",
         "bleachingDistance": 0.4,
         "id": "overlay_C5AF19C8_C883_8550_41D4_AE95966497FA",
         "bleaching": 0.7,
         "yaw": -80.27,
         "pitch": 26.69
        },
        {
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "id": "overlay_309D034B_3E86_6EFC_41C2_8E3373DBD9BF",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_C6BA52EA_C88C_8751_41D3_B64BC0E34638, this.camera_23E4E20C_3F86_EE74_419A_9078133C2E7A); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 81,
              "width": 200,
              "url": "media/panorama_C36EB689_C8BD_8FD3_41DD_52430BCA172E_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "yaw": -73.79,
           "hfov": 15.92,
           "pitch": -51.38
          }
         ],
         "items": [
          {
           "yaw": -73.79,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 15.92,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 222,
              "width": 544,
              "url": "media/panorama_C36EB689_C8BD_8FD3_41DD_52430BCA172E_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -51.38
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_C36EB689_C8BD_8FD3_41DD_52430BCA172E_t.jpg",
       "stereoSphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 7680,
          "width": 7680,
          "url": "media/panorama_C36EB689_C8BD_8FD3_41DD_52430BCA172E_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 4998,
          "width": 4998,
          "url": "media/panorama_C36EB689_C8BD_8FD3_41DD_52430BCA172E.jpeg"
         }
        ]
       }
      }
     ]
    },
    "backwardYaw": -73.79,
    "yaw": -158.83,
    "distance": 1
   }
  ],
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "snapshots": [
     {
      "class": "PanoramaSnapshot",
      "position": {
       "class": "PanoramaCameraPosition",
       "hfov": 80,
       "yaw": -68.29,
       "pitch": -6.71
      },
      "id": "snapshot_C2AEFEDC_C8BC_FF71_41D9_237720EC82DF",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 1500,
         "width": 1500,
         "url": "media/snapshot_C2AEFEDC_C8BC_FF71_41D9_237720EC82DF.jpg"
        }
       ]
      }
     }
    ],
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.4,
      "id": "overlay_C4E93145_C883_8553_41E3_53C5C6D483CF",
      "bleaching": 0.27,
      "yaw": -17.46,
      "pitch": 63.12
     },
     {
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.4,
      "id": "overlay_C4F5B68C_C883_8FD1_41E5_1DBA307F5FA7",
      "bleaching": 0.25,
      "yaw": -145.08,
      "pitch": 73.17
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_319112C5_3D86_2FF7_41C2_862ABD514193",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_C36EB689_C8BD_8FD3_41DD_52430BCA172E, this.camera_23F481F4_3F86_ED94_41B6_1C55D20681C9); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 143,
           "width": 194,
           "url": "media/panorama_C6BA52EA_C88C_8751_41D3_B64BC0E34638_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "yaw": -158.83,
        "hfov": 18.22,
        "pitch": -0.63
       }
      ],
      "items": [
       {
        "yaw": -158.83,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 18.22,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 286,
           "width": 388,
           "url": "media/panorama_C6BA52EA_C88C_8751_41D3_B64BC0E34638_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -0.63
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_C6BA52EA_C88C_8751_41D3_B64BC0E34638_t.jpg",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 7680,
       "width": 7680,
       "url": "media/panorama_C6BA52EA_C88C_8751_41D3_B64BC0E34638_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 4998,
       "width": 4998,
       "url": "media/panorama_C6BA52EA_C88C_8751_41D3_B64BC0E34638.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "gyroscopeEnabled": true,
  "mouseControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "buttonCardboardView": {
   "paddingRight": 0,
   "maxWidth": 49,
   "mode": "push",
   "toolTipTextShadowOpacity": 0,
   "toolTipFontWeight": "normal",
   "width": "36.03%",
   "toolTipShadowOpacity": 0.72,
   "height": 36,
   "toolTip": "Enter VR",
   "toolTipShadowColor": "#333333",
   "toolTipFontFamily": "Arial",
   "paddingLeft": 0,
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowBlurRadius": 3,
   "class": "IconButton",
   "toolTipFontSize": 12,
   "toolTipBorderSize": 1,
   "transparencyActive": true,
   "toolTipPaddingBottom": 4,
   "toolTipPaddingTop": 4,
   "horizontalAlign": "center",
   "toolTipShadowHorizontalLength": 0,
   "toolTipPaddingLeft": 6,
   "shadow": false,
   "borderSize": 0,
   "maxHeight": 36,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "minWidth": 1,
   "backgroundOpacity": 0,
   "id": "IconButton_8F1ED57C_9F77_823C_41D2_6EBBB4F949EE",
   "paddingTop": 0,
   "toolTipOpacity": 1,
   "toolTipPaddingRight": 6,
   "iconURL": "skin/IconButton_8F1ED57C_9F77_823C_41D2_6EBBB4F949EE.png",
   "toolTipTextShadowColor": "#000000",
   "toolTipBorderRadius": 3,
   "toolTipShadowVerticalLength": 0,
   "toolTipShadowBlurRadius": 3,
   "minHeight": 1,
   "toolTipFontStyle": "normal",
   "toolTipShadowSpread": 0,
   "toolTipFontColor": "#606060",
   "verticalAlign": "middle",
   "toolTipBackgroundColor": "#F6F6F6"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_C6BA52EA_C88C_8751_41D3_B64BC0E34638_camera",
  "automaticRotationSpeed": 1,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": -68.29,
   "pitch": -6.71
  },
  "manualRotationSpeed": 2000
 },
 "this.panorama_C36EB689_C8BD_8FD3_41DD_52430BCA172E",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_C36EB689_C8BD_8FD3_41DD_52430BCA172E_camera",
  "automaticRotationSpeed": 1,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": 140.04,
   "pitch": 9.17
  },
  "manualRotationSpeed": 2000
 },
 "this.panorama_315576BE_3D82_5797_41C7_BD1B7C479D25",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_315576BE_3D82_5797_41C7_BD1B7C479D25_camera",
  "automaticRotationSpeed": 1,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": 67.03,
   "pitch": -12.2
  },
  "manualRotationSpeed": 2000
 },
 "this.panorama_30F5B631_3D82_36AC_41B8_51140C97D189",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_30F5B631_3D82_36AC_41B8_51140C97D189_camera",
  "automaticRotationSpeed": 1,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": 0,
   "pitch": 0
  },
  "manualRotationSpeed": 2000
 },
 "this.panorama_334C23E2_3E81_EDAC_41CC_8C3582CCBB52",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_334C23E2_3E81_EDAC_41CC_8C3582CCBB52_camera",
  "automaticRotationSpeed": 1,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": 0,
   "pitch": 0
  },
  "manualRotationSpeed": 2000
 },
 {
  "hfovMax": 80,
  "partial": false,
  "cardboardMenu": "this.Menu_23CF51E1_3F86_EDAC_41AC_D2FFEC3ECD9C",
  "id": "panorama_3129B72F_3D81_D6B4_4149_A68C489C537B",
  "thumbnailUrl": "media/panorama_3129B72F_3D81_D6B4_4149_A68C489C537B_t.jpg",
  "pitch": 0,
  "label": "PIC_20190904_180914_edited",
  "class": "Panorama",
  "hfovMin": 80,
  "vfov": 180,
  "hfov": 360,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "snapshots": [
     {
      "class": "PanoramaSnapshot",
      "position": {
       "class": "PanoramaCameraPosition",
       "hfov": 80,
       "yaw": 0,
       "pitch": 0
      },
      "id": "snapshot_366FDC4E_3D86_3AF4_41B0_D70626274FEA",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 1500,
         "width": 1500,
         "url": "media/snapshot_366FDC4E_3D86_3AF4_41B0_D70626274FEA.jpg"
        }
       ]
      }
     }
    ],
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_31EA2864_3E86_5AB4_41AD_5E5C82D290C1",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 124,
           "width": 180,
           "url": "media/panorama_3129B72F_3D81_D6B4_4149_A68C489C537B_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": 140.63,
        "hfov": 20.14,
        "pitch": -5.41
       }
      ],
      "items": [
       {
        "yaw": 140.63,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 20.14,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 249,
           "width": 361,
           "url": "media/panorama_3129B72F_3D81_D6B4_4149_A68C489C537B_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -5.41
       }
      ]
     },
     {
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.71,
      "id": "overlay_2E410705_3E82_7674_41C3_85C02ADA2C1B",
      "bleaching": 0.7,
      "yaw": 31.28,
      "pitch": 4.58
     },
     {
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.4,
      "id": "overlay_31A29B42_3E82_DEEC_41CA_5BF94E2E38E1",
      "bleaching": 0.7,
      "yaw": -170.7,
      "pitch": 52.32
     },
     {
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.4,
      "id": "overlay_3193D3FD_3E82_2D95_41C5_D0716B8D8571",
      "bleaching": 0.7,
      "yaw": -88.81,
      "pitch": 40.26
     },
     {
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.4,
      "id": "overlay_319057ED_3E82_35B5_41C5_971BCC355ED8",
      "bleaching": 0.7,
      "yaw": -24.49,
      "pitch": 29.71
     },
     {
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.4,
      "id": "overlay_318147AC_3E82_55BB_41B5_73E0669C17DD",
      "bleaching": 0.7,
      "yaw": 153.12,
      "pitch": 45.28
     }
    ],
    "thumbnailUrl": "media/panorama_3129B72F_3D81_D6B4_4149_A68C489C537B_t.jpg",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 6434,
       "width": 6434,
       "url": "media/panorama_3129B72F_3D81_D6B4_4149_A68C489C537B_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 3999,
       "width": 3999,
       "url": "media/panorama_3129B72F_3D81_D6B4_4149_A68C489C537B.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_3129B72F_3D81_D6B4_4149_A68C489C537B_camera",
  "automaticRotationSpeed": 1,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": 0,
   "pitch": 0
  },
  "manualRotationSpeed": 2000
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C6BA52EA_C88C_8751_41D3_B64BC0E34638",
    "camera": "this.panorama_C6BA52EA_C88C_8751_41D3_B64BC0E34638_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C36EB689_C8BD_8FD3_41DD_52430BCA172E",
    "camera": "this.panorama_C36EB689_C8BD_8FD3_41DD_52430BCA172E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_315576BE_3D82_5797_41C7_BD1B7C479D25",
    "camera": "this.panorama_315576BE_3D82_5797_41C7_BD1B7C479D25_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_30F5B631_3D82_36AC_41B8_51140C97D189",
    "camera": "this.panorama_30F5B631_3D82_36AC_41B8_51140C97D189_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_334C23E2_3E81_EDAC_41CC_8C3582CCBB52",
    "camera": "this.panorama_334C23E2_3E81_EDAC_41CC_8C3582CCBB52_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3129B72F_3D81_D6B4_4149_A68C489C537B",
    "camera": "this.panorama_3129B72F_3D81_D6B4_4149_A68C489C537B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)"
   }
  ]
 },
 "this.Menu_23CF51E1_3F86_EDAC_41AC_D2FFEC3ECD9C",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_23CBB1EC_3F86_EDB4_41CD_FD226F5E3668",
  "automaticRotationSpeed": 1,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": -81.08,
   "pitch": 0
  },
  "manualRotationSpeed": 2000
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_23F481F4_3F86_ED94_41B6_1C55D20681C9",
  "automaticRotationSpeed": 1,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": 106.21,
   "pitch": 0
  },
  "manualRotationSpeed": 2000
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_23F3E1FC_3F86_ED94_41C8_84B44FE3866E",
  "automaticRotationSpeed": 1,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": 49.56,
   "pitch": 0
  },
  "manualRotationSpeed": 2000
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_23FEA204_3F86_EE74_41CC_A05102531E9E",
  "automaticRotationSpeed": 1,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": -135.59,
   "pitch": 0
  },
  "manualRotationSpeed": 2000
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_23E4E20C_3F86_EE74_419A_9078133C2E7A",
  "automaticRotationSpeed": 1,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": 21.17,
   "pitch": 0
  },
  "manualRotationSpeed": 2000
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_23E2D214_3F86_EE94_41B9_AF33E37B0044",
  "automaticRotationSpeed": 1,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": 65.89,
   "pitch": 0
  },
  "manualRotationSpeed": 2000
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_23E8B21C_3F86_EE94_41CA_38410B1495FC",
  "automaticRotationSpeed": 1,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": 161.73,
   "pitch": 0
  },
  "manualRotationSpeed": 2000
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_23116225_3F86_EEB4_41AD_F45107F94A2D",
  "automaticRotationSpeed": 1,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": 31.02,
   "pitch": 0
  },
  "manualRotationSpeed": 2000
 },
 {
  "label": "silk-soy-logo",
  "class": "Photo",
  "width": 1000,
  "id": "photo_921F1247_9F51_411D_419D_4BB7383F336D",
  "height": 1000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_921F1247_9F51_411D_419D_4BB7383F336D.png"
    }
   ]
  },
  "duration": 5000,
  "thumbnailUrl": "media/photo_921F1247_9F51_411D_419D_4BB7383F336D_t.png"
 }
], "children": [
 {
  "playbackBarBorderRadius": 4,
  "paddingRight": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBorderSize": 2,
  "playbackBarHeadShadow": true,
  "toolTipShadowOpacity": 0.72,
  "toolTipBorderColor": "#767676",
  "toolTipShadowColor": "#333333",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressBorderSize": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipFontSize": 12,
  "toolTipBorderSize": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingBottom": 4,
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarOpacity": 1,
  "shadow": false,
  "progressBackgroundOpacity": 1,
  "paddingBottom": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadWidth": 6,
  "playbackBarLeft": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipOpacity": 1,
  "progressBottom": 1,
  "playbackBarOpacity": 1,
  "paddingTop": 0,
  "playbackBarHeadHeight": 30,
  "toolTipBorderRadius": 3,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowBlurRadius": 3,
  "minHeight": 50,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderColor": "#000000",
  "playbackBarHeadShadowColor": "#000000",
  "progressRight": 10,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "progressBarBorderRadius": 4,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBottom": 10,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressLeft": 10,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#AAAAAA",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "progressBorderRadius": 4,
  "toolTipFontFamily": "Arial",
  "paddingLeft": 0,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressOpacity": 1,
  "minWidth": 100,
  "class": "ViewerArea",
  "progressBarBorderSize": 0,
  "playbackBarRight": 0,
  "borderSize": 0,
  "playbackBarHeight": 20,
  "playbackBarBorderColor": "#AAAAAA",
  "height": "100%",
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderColor": "#000000",
  "transitionMode": "blending",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "top": 0,
  "borderRadius": 0,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarBackgroundOpacity": 1,
  "progressHeight": 20,
  "id": "MainViewer",
  "playbackBarBorderSize": 2,
  "toolTipPaddingRight": 6,
  "left": "0%",
  "toolTipFontStyle": "normal",
  "toolTipFontColor": "#606060",
  "right": "0%"
 },
 {
  "paddingRight": 0,
  "overflow": "scroll",
  "scrollBarMargin": 2,
  "height": 67,
  "gap": 10,
  "paddingLeft": 0,
  "class": "Container",
  "horizontalAlign": "center",
  "scrollBarWidth": 10,
  "shadow": false,
  "borderSize": 0,
  "top": "93.62%",
  "borderRadius": 0,
  "paddingBottom": 0,
  "minWidth": 1,
  "backgroundOpacity": 0,
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "layout": "horizontal",
  "minHeight": 1,
  "left": "10%",
  "children": [
   {
    "children": [
     "this.IconButton_8F1ED57C_9F77_823C_41D2_6EBBB4F949EE"
    ],
    "paddingRight": 10,
    "overflow": "hidden",
    "scrollBarMargin": 2,
    "width": "25.39%",
    "gap": 4,
    "paddingLeft": 10,
    "borderSize": 0,
    "horizontalAlign": "center",
    "scrollBarWidth": 10,
    "height": "77.465%",
    "shadow": false,
    "class": "Container",
    "borderRadius": 0,
    "paddingBottom": 10,
    "minWidth": 421,
    "backgroundOpacity": 0,
    "id": "Container_52344940_5F01_EFC4_41D4_ABA40101D8BF",
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarVisible": "rollOver",
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "minHeight": 20,
    "layout": "horizontal",
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "middle",
  "right": "10%"
 }
], 
 "mouseWheelEnabled": true,
 "overflow": "visible",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "gap": 10,
 "paddingLeft": 0,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "height": "100%",
 "shadow": false,
 "class": "Player",
 "vrPolyfillScale": 1,
 "scripts": {
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "existsKey": function(key){  return key in window; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getKey": function(key){  return window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } }
 },
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 20,
 "id": "rootPlayer",
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_8F1ED57C_9F77_823C_41D2_6EBBB4F949EE], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "layout": "absolute",
 "verticalAlign": "top"
})