const data = [
    {
        id: 'EIC',
        title: 'EIC',
        initialState: {
            longitude: -71.34929878488046,
            latitude: -29.964576278694942,
            zoom: 18.5
        },
        sources: [
            {
                id: 1,
                data: {
                    type: 'Feature', geometry: {
                        type: 'Polygon', coordinates: [[
                            [-71.34942938204902, -29.96448315369632],
                            [-71.34939589017934, -29.964539111539167],
                            [-71.34908808394843, -29.964417524087402],
                            [-71.34913034749826, -29.96435327611247],
                            [-71.34942938204902, -29.96448315369632]
                        ]]
                    }
                },
                layer: {
                    type: 'fill',
                    paint: {
                        'fill-opacity': 0.5
                    }
                }
            },
            {
                id: 2,
                data: {
                    type: 'Feature', geometry: {
                        type: 'Polygon', coordinates: [[
                            [-71.34937326168937, -29.964571652645958],
                            [-71.34934241628734, -29.964630906721162],
                            [-71.34922574020139, -29.96457978556034],
                            [-71.3492512211857, -29.964512398535433],
                            [-71.34937326168937, -29.964571652645958],
                        ]]
                    }
                },
                layer: {
                    type: 'fill',
                    paint: {
                        'fill-opacity': 0.5
                    }
                }
            },
            {
                group: 'text',
                data: {
                    type: 'FeatureCollection',
                    features: [
                        {
                            id: 1,
                            type: 'Feature', geometry: {
                                type: 'Point', coordinates: [-71.34926530278227, -29.96444733515769]
                            },
                            properties: {
                                title: '0'
                            }
                        },
                        {
                            id: 2,
                            type: 'Feature', geometry: {
                                type: 'Point', coordinates: [-71.34930084204981, -29.96456932895601]
                            },
                            properties: {
                                title: '0'
                            }
                        }
                    ]
                },
                layer: {
                    id: 'text-layer',
                    type: 'symbol',
                    layout: {
                        'text-field': ['get', 'title'],
                        'text-font': ['Arial Unicode MS Bold'],
                        'text-size': 30
                    }
                }
            }
        ]
    },
    {
        title: 'Derecho',
        initialState: {
            longitude: -71.34892403035441,
            latitude: -29.964918320434677,
            zoom: 19
        },
        sources: [
            {
                data: {
                    type: 'Feature', geometry: {
                        type: 'Polygon', coordinates: [[
                            [-71.3489163963984 - 0.00005, -29.965037126769747 + 0.00002],
                            [-71.34885202338545 - 0.00005, -29.965056878039558 + 0.00002],
                            [-71.34878027429812 - 0.00005, -29.964830319120672 + 0.00002],
                            [-71.34884464731105 - 0.00005, -29.964812891490126 + 0.00002],
                            [-71.3489163963984 - 0.00005, -29.965037126769747 + 0.00002]
                        ]]
                    }
                },
                layer: {
                    type: 'fill',
                    paint: {
                        'fill-color': '#fc0303',
                        'fill-opacity': 0.5
                    }
                }
            },
            {
                data: {
                    type: 'Feature', geometry: {
                        type: 'Polygon', coordinates: [[
                            [-71.34901364621024 - 0.00005, -29.965012834890135 + 0.00002], 
                            [-71.34895061430173 - 0.00005, -29.965034328924123 + 0.00002], 
                            [-71.34887350079666 - 0.00005, -29.964806608111612 + 0.00002], 
                            [-71.34894055601846 - 0.00005, -29.964790342319326 + 0.00002], 
                            [-71.34901364621024 - 0.00005, -29.965012834890135 + 0.00002],
                        ]]
                    }
                },
                layer: {
                    type: 'fill',
                    paint: {
                        'fill-color': '#13fc03',
                        'fill-opacity': 0.5
                    }
                }
            },
            {
                group: 'text',
                data: {
                    type: 'FeatureCollection',
                    features: [
                        {
                            type: 'Feature', geometry: { 
                                type: 'Point', coordinates: [-71.34883593013222 - 0.00006, -29.964922104591068 + 0.00002]
                            },
                            properties: {
                                title: '0'
                            }
                        },
                        {
                            type: 'Feature', geometry: { 
                                type: 'Point', coordinates: [-71.34895731982392 - 0.000035, -29.964900717286177 + 0.00002]
                            },
                            properties: {
                                title: '5'
                            }
                        },
                    ]
                },
                layer: {
                    id: 'text-layer',
                    type: 'symbol',
                    layout: {
                        'text-field': ['get', 'title'],
                        'text-font': ['Arial Unicode MS Bold'],
                        'text-size': 30
                    }
                }
            }
        ]
    },
    {
        title: 'Estacionamiento Estudiantes',
        initialState: {
            longitude: -71.34803285606101,
            latitude: -29.963810490495483,
            zoom: 17.5
        },
        sources: [
            {
                data: {
                    type: 'Feature', geometry: {
                        type: 'Polygon', coordinates: [[
                            [-71.34854226094701, -29.963891792636463], 
                            [-71.34852705377553, -29.963975963570068], 
                            [-71.34814096058834, -29.963933512151588], 
                            [-71.34815109870266, -29.963844217729417], 
                            [-71.34854226094701, -29.963891792636463]
                        ]]
                    }
                },
                layer: {
                    type: 'fill',
                    paint: {
                        'fill-color': '#13fc03',
                        'fill-opacity': 0.5
                    }
                }
            },
            {
                data: {
                    type: 'Feature', geometry: {
                        type: 'Polygon', coordinates: [[
                            [-71.3485490196899,-29.963776880898973],
                            [-71.34854395063275,-29.963850073103814],
                            [-71.3483504816177,-29.963833970823373],
                            [-71.34836737847492,-29.963757118994423],
                            [-71.3485490196899,-29.963776880898973]
                        ]]
                    }
                },
                layer: {
                    type: 'fill',
                    paint: {
                        'fill-color': '#13fc03',
                        'fill-opacity': 0.5
                    }
                }
            },
            {
                data: {
                    type: 'Feature', geometry: {
                        type: 'Polygon', coordinates: [[
                            [-71.34854986453276,-29.963739552853752 + 0.00005], 
                            [-71.34857858919001 + 0.00003,-29.963670752106204 + 0.00005], 
                            [-71.34823051393153,-29.96372637824621 + 0.00005],  
                            [-71.3482313587744,-29.963803230098925 + 0.00005], 
                            [-71.34854986453276,-29.963739552853752 + 0.00005]
                        ]]
                    }
                },
                layer: {
                    type: 'fill',
                    paint: {
                        'fill-color': '#13fc03',
                        'fill-opacity': 0.5
                    }
                }
            },
            {
                data: {
                    type: 'Feature', geometry: {
                        type: 'Polygon', coordinates: [[
                            [-71.34845622138864,-29.964011086742328 ], 
                            [-71.34823233803066,-29.96398180991428 ], 
                            [-71.3482230447592,-29.964039631641352 ], 
                            [-71.3484317209457,-29.964072568053133 ], 
                            [-71.34845622138864,-29.964011086742328]
                        ]]
                    }
                },
                layer: {
                    type: 'fill',
                    paint: {
                        'fill-color': '#fcd303',
                        'fill-opacity': 0.5
                    }
                }
            },
            {
                data: {
                    type: 'Feature', geometry: {
                        type: 'Polygon', coordinates: [[
                            [-71.34816137121462,-29.96362829152841], 
                            [-71.34806252459995,-29.96368757730713], 
                            [-71.34792397037086,-29.963574861104956], 
                            [-71.3480422483713,-29.96349068983165], 
                            [-71.34816137121462,-29.96362829152841]
                        ]]
                    }
                },
                layer: {
                    type: 'fill',
                    paint: {
                        'fill-color': '#13fc03',
                        'fill-opacity': 0.5
                    }
                }
            },
            {
                data: {
                    type: 'Feature', geometry: {
                        type: 'Polygon', coordinates: [[
                            [-71.34803548962842, -29.963711730762387], 
                            [-71.34791721162797,-29.96380175722573],  
                            [-71.34771106997003, -29.963607797670754],
                            [-71.34783610671337, -29.963534605287478],  
                            [-71.34803548962842, -29.963711730762387]
                        ]]
                    }
                },
                layer: {
                    type: 'fill',
                    paint: {
                        'fill-color': '#13fc03',
                        'fill-opacity': 0.5
                    }
                }
            },
            {
                data: {
                    type: 'Feature', geometry: {
                        type: 'Polygon', coordinates: [[
                            [-71.34789414891337,-29.96382051338778],
                            [-71.34779811627126,-29.96389588843157],
                            [-71.34756254902098,-29.963679718341556],
                            [-71.3476725351239,-29.963610031830743],
                            [-71.34789414891337,-29.96382051338778]
                        ]]
                    }
                },
                layer: {
                    type: 'fill',
                    paint: {
                        'fill-color': '#13fc03',
                        'fill-opacity': 0.5
                    }
                }
            },
            {
                data: {
                    type: 'Feature', geometry: {
                        type: 'Polygon', coordinates: [[
                            [-71.34774394401161,-29.96388451107012],
                            [-71.34763806186777,-29.963962730403694],
                            [-71.34743778866545, -29.963774292813792],
                            [-71.34754859556016, -29.963696073331903],
                            [-71.34774394401161,-29.96388451107012]
                        ]]
                    }
                },
                layer: {
                    type: 'fill',
                    paint: {
                        'fill-color': '#13fc03',
                        'fill-opacity': 0.5
                    }
                }
            },
            {
                group: 'text',
                data: {
                    type: 'FeatureCollection',
                    features: [
                        {
                            type: 'Feature', geometry: {
                                type: 'Point', coordinates: [-71.34838308582084, -29.963698155680618 + 0.000006]
                            },
                            properties: {
                                title: '10'
                            }
                        },
                        {
                            type: 'Feature', geometry: {
                                type: 'Point', coordinates: [-71.34849287160239, -29.963802588261657]
                            },
                            properties: {
                                title: '5'
                            }
                        },
                        {
                            type: 'Feature', geometry: { 
                                type: 'Point', coordinates: [-71.34833161963468, -29.96391353060655]
                            },
                            properties: {
                                title: '20'
                            }
                        },
                        {
                            type: 'Feature', geometry: {
                                type: 'Point', coordinates: [-71.34833894872958, -29.964047013917448]
                            },
                            properties: {
                                title: '1'
                            }
                        },
                        {
                            type: 'Feature', geometry: {
                                type: 'Point', coordinates: [-71.34803793598033, -29.963590241877625]
                            },
                            properties: {
                                title: '6'
                            }
                        },
                        {
                            type: 'Feature', geometry: {
                                type: 'Point', coordinates: [-71.34788126037137, -29.963664387738767]
                            },
                            properties: {
                                title: '20'
                            }
                        },
                        {
                            type: 'Feature', geometry: {
                                type: 'Point', coordinates: [-71.3477218239612, -29.963740925343647]
                            },
                            properties: {
                                title: '20'
                            }
                        },
                        {
                            type: 'Feature', geometry: {
                                type: 'Point', coordinates: [-71.34757964256947, -29.963814473142723]
                            },
                            properties: {
                                title: '15'
                            }
                        },
                    ]
                },
                layer: {
                    id: 'text-layer',
                    type: 'symbol',
                    layout: {
                        'text-field': ['get', 'title'],
                        'text-font': ['Arial Unicode MS Bold'],
                        'text-size': 30
                    }
                }
            }
        ]
    },
    {
        id: 'Centro de salud',
        title: 'Centro de Salud',
        initialState: { 
            longitude: -71.35145741141832,
            latitude: -29.964792228429253,
            zoom: 18.5
        },
        sources: [
            {
                id: 3,
                data: {
                    type: 'Feature', geometry: {
                        type: 'Polygon', coordinates: [[
                            [-71.35183493232473, -29.9646743013585],
                            [-71.35184700226466, -29.964732974450953],
                            [-71.35149630345464, -29.964811979748458],
                            [-71.35147417523144, -29.964764925130297],
                            [-71.35183493232473, -29.9646743013585]
                        ]]
                    }
                },
                layer: {
                    type: 'fill',
                    paint: {
                        'fill-opacity': 0.5
                    }
                }
            },
            {
                id: 4,
                data: {
                    type: 'Feature', geometry: {
                        type: 'Polygon', coordinates: [[
                            [-71.35143327152953, -29.964775962636775],
                            [-71.3514507058872, -29.96482243632868],
                            [-71.3510302696465, -29.96493339218025],
                            [-71.35101618804993, -29.964888080381492],
                            [-71.35143327152953, -29.964775962636775],
                        ]]
                    }
                },
                layer: {
                    type: 'fill',
                    paint: {
                        'fill-opacity': 0.5
                    }
                }
            },
            {
                group: 'text',
                data: {
                    type: 'FeatureCollection',
                    features: [
                        {
                            id: 3,
                            type: 'Feature', geometry: { 
                                type: 'Point', coordinates: [-71.35160939363874, -29.96475763286886]
                            },
                            properties: {
                                title: '0'
                            }
                        },
                        {
                            id: 4,
                            type: 'Feature', geometry: {
                                type: 'Point', coordinates: [-71.35131592489138, -29.96483243632868]
                            },
                            properties: {
                                title: '0'
                            }
                        },
                    ]
                },
                layer: {
                    id: 'text-layer',
                    type: 'symbol',
                    layout: {
                        'text-field': ['get', 'title'],
                        'text-font': ['Arial Unicode MS Bold'],
                        'text-size': 30
                    }
                }
            }
        ]
    },
    {
        title: 'Hawaii',
        initialState: {
            longitude: -71.35165930587169,
            latitude: -29.965866285089245,
            zoom: 18.5
        },
        sources: [ 
            {
                data: {
                    type: 'Feature', geometry: {
                        type: 'Polygon', coordinates: [[
                            [-71.3516960924942, -29.96575866444206], 
                            [-71.35163948802254, -29.965782085486424], 
                            [-71.35171805840855, -29.96597457698565], 
                            [-71.35178987005169, -29.965943836923344], 
                            [-71.3516960924942, -29.96575866444206]
                        ]]
                    }
                },
                layer: {
                    type: 'fill',
                    paint: {
                        'fill-color': '#13fc03',
                        'fill-opacity': 0.5
                    }
                }
            },
            {
                data: {
                    type: 'Feature', geometry: {
                        type: 'Polygon', coordinates: [[
                            [-71.35167328173296, -29.965932126423223],
                            [-71.3517104548188, -29.965987751297476],
                            [-71.35141391496745, -29.966143647161196],
                            [-71.35133196521001, -29.96612315382224],
                            [-71.35167328173296, -29.965932126423223],
                        ]]
                    }
                },
                layer: {
                    type: 'fill',
                    paint: {
                        'fill-color': '#13fc03',
                        'fill-opacity': 0.5
                    }
                }
            },
            {
                data: {
                    type: 'Feature', geometry: {
                        type: 'Polygon', coordinates: [[
                            [-71.3517332655793, -29.965752809179463],  
                            [-71.35198164938024, -29.96569132890812],
                            [-71.3520061498232, -29.96575500490272],
                            [-71.35175945570796, -29.96581428941276],
                            [-71.3517332655793, -29.965752809179463], 
                        ]]
                    }
                },
                layer: {
                    type: 'fill',
                    paint: {
                        'fill-color': '#13fc03',
                        'fill-opacity': 0.5
                    }
                }
            },
            {
                group: 'text',
                data: {
                    type: 'FeatureCollection',
                    features: [
                        {
                            type: 'Feature', geometry: {
                                type: 'Point', coordinates: [-71.35186421622264, -29.96574988154835]
                            },
                            properties: {
                                title: '8'
                            }
                        },
                        {
                            type: 'Feature', geometry: {  
                                type: 'Point', coordinates: [-71.3517153857649, -29.965869914352968]
                            },
                            properties: {
                                title: '7'
                            }
                        },
                        {
                            type: 'Feature', geometry: {
                                type: 'Point', coordinates: [-71.35154655530238, -29.966035325178577]
                            },
                            properties: {
                                title: '15'
                            }
                        },
                    ]
                },
                layer: {
                    id: 'text-layer',
                    type: 'symbol',
                    layout: {
                        'text-field': ['get', 'title'],
                        'text-font': ['Arial Unicode MS Bold'],
                        'text-size': 30
                    }
                }
            }
        ]
    },
    {
        title: 'Sector Canchas',
        initialState: {
            longitude: -71.35338635322525,
            latitude: -29.96473969859547,
            zoom: 18.5
        },
        sources: [ 
            {
                data: {
                    type: 'Feature', geometry: {
                        type: 'Polygon', coordinates: [[
                            [-71.35349499990953, -29.9646372962056],
                            [-71.35322208515679, -29.96468841733683],
                            [-71.35323080233563, -29.964731405540476],
                            [-71.35350639929725, -29.964679122587658],
                            [-71.35349499990953, -29.9646372962056]
                        ]]
                    }
                },
                layer: {
                    type: 'fill',
                    paint: {
                        'fill-color': '#13fc03',
                        'fill-opacity': 0.5
                    }
                }
            },
            {
                data: {
                    type: 'Feature', geometry: {
                        type: 'Polygon', coordinates: [[
                            [-71.35360362936885, -29.964778460174504], 
                            [-71.35325963608099, -29.96484119965188],
                            [-71.35324756614108, -29.964798792416875],
                            [-71.35359491219002, -29.964731405540476],
                            [-71.35360362936885, -29.964778460174504],
                        ]]
                    }
                },
                layer: {
                    type: 'fill',
                    paint: {
                        'fill-color': '#13fc03',
                        'fill-opacity': 0.5
                    }
                }
            },
            {
                group: 'text',
                data: {
                    type: 'FeatureCollection',
                    features: [
                        {
                            type: 'Feature', geometry: {
                                type: 'Point', coordinates: [-71.3533709477492, -29.964679217978358]
                            },
                            properties: {
                                title: '11'
                            }
                        },
                        {
                            type: 'Feature', geometry: {
                                type: 'Point', coordinates: [-71.35341654530002, -29.964788916756817]
                            },
                            properties: {
                                title: '14'
                            }
                        },
                    ]
                },
                layer: {
                    id: 'text-layer',
                    type: 'symbol',
                    layout: {
                        'text-field': ['get', 'title'],
                        'text-font': ['Arial Unicode MS Bold'],
                        'text-size': 30
                    }
                }
            }
        ]
    },
];
const data_2 = [
    {
        title: 'EIC',
        initialState: {
            longitude: -71.34929878488046,
            latitude: -29.964576278694942,
            zoom: 18.5
        }
    },
    {
        title: 'Derecho',
        initialState: {
            longitude: -71.34892403035441,
            latitude: -29.964918320434677,
            zoom: 19
        }
    },
    {
        title: 'Estacionamiento Estudiantes',
        initialState: {
            longitude: -71.34803285606101,
            latitude: -29.963810490495483,
            zoom: 17.5
        },
    },
    {
        title: 'Centro de Salud',
        initialState: { 
            longitude: -71.35145741141832,
            latitude: -29.964792228429253,
            zoom: 18.5
        }
    },
    {
        title: 'Hawaii',
        initialState: {
            longitude: -71.35165930587169,
            latitude: -29.965866285089245,
            zoom: 18.5
        },
    },
    {
        title: 'Sector Canchas',
        initialState: {
            longitude: -71.35338635322525,
            latitude: -29.96473969859547,
            zoom: 18.5
        },
    },
];

const mapas = {data, data_2};
export default mapas;

/*
const a = [
    {"Derecho": { total: 20, disp: 5}},
    {"Estudiantes": {total: 110, disp: 97}},
    {"Hawaii": {total: 35, disp: 30}},
    {"Canchas": {total: 25, disp: 25}},
]
*/