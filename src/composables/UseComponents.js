import { reactive, ref } from "vue";

const pcComponents = reactive({
  processors: [
    {
      id: 'cpu_1',
      brand: 'AMD',
      name: 'Ryzen 5 5600',
      socket: 'AM4', //главный параметр совместимости с материнской платой.
      ram_type: 'DDR4', //важен для платформ Intel последних поколений, где процессор может уметь и то, и другое.
      tdp_w: 65, //тепловыделение. Нужно для подбора кулера (он должен отводить этот TDP) и расчета общей мощности блока питания.
      has_graphics: false, //если дискретной видеокарты нет, а эта переменная false, сборка не выведет изображение.
      price: 10499
    },
    {
      id: 'cpu_2',
      brand: 'Intel',
      name: 'Core i5-11400f', 
      socket: 'LGA1200',
      ram_type: 'DDR4',
      tdp_w: 65,
      has_graphics: false,
      price: 10499
    },
    {
      id: 'cpu_3',
      brand: 'AMD',
      name: 'Ryzen 7 5700X',
      socket: 'AM4',
      ram_type: 'DDR4',
      tdp_w: 65,
      has_graphics: false,
      price: 14999
    },
    {
      id: 'cpu_4',
      brand: 'AMD',
      name: 'Ryzen 5 7500F',
      socket: 'AM5',
      ram_type: 'DDR5',
      tdp_w: 65,
      has_graphics: false,
      price: 11299
    },
    {
      id: 'cpu_5',
      brand: 'Intel',
      name: 'Core i5-12400F',
      socket: 'LGA 1700',
      ram_type: 'DDR4 DDR5',
      tdp_w: 117,
      has_graphics: false,
      price: 13299
    },
    {
      id: 'cpu_6',
      brand: 'AMD',
      name: 'Ryzen 7 9800X3D',
      socket: 'AM5',
      ram_type: 'DDR5',
      tdp_w: 120,
      has_graphics: true,
      price: 39999
    },
    {
      id: 'cpu_7',
      brand: 'Intel',
      name: 'Core i3-12100',
      socket: 'LGA 1700',
      ram_type: 'DDR4 DDR5',
      tdp_w: 89,
      has_graphics: true,
      price: 15699
    },
    {
      id: 'cpu_8',
      brand: 'AMD',
      name: 'Ryzen 5 5600X',
      socket: 'AM4',
      ram_type: 'DDR4',
      tdp_w: 65,
      has_graphics: false,
      price: 12799
    },
    {
      id: 'cpu_9',
      brand: 'Intel',
      name: 'Core i5-14600KF',
      socket: 'LGA 1700',
      ram_type: 'DDR4 DDR5',
      tdp_w: 181,
      has_graphics: false,
      price: 22999
    },
    {
      id: 'cpu_10',
      brand: 'AMD',
      name: 'Ryzen 7 7700',
      socket: 'AM5',
      ram_type: 'DDR5',
      tdp_w: 65,
      has_graphics: true,
      price: 17499
    },
    {
      id: 'cpu_11',
      brand: 'Intel',
      name: 'Core i5-14600K',
      socket: 'LGA 1700',
      ram_type: 'DDR4 DDR5',
      tdp_w: 181,
      has_graphics: true,
      price: 22799
    },
    {
      id: 'cpu_12',
      brand: 'AMD',
      name: 'Ryzen 5 3600',
      socket: 'AM4',
      ram_type: 'DDR4',
      tdp_w: 65,
      has_graphics: false,
      price: 7599
    },
    {
      id: 'cpu_13',
      brand: 'AMD',
      name: 'Ryzen 9 9950X3D',
      socket: 'AM5',
      ram_type: 'DDR5',
      tdp_w: 170,
      has_graphics: true,
      price: 62799
    },
    {
      id: 'cpu_14',
      brand: 'AMD',
      name: 'Ryzen 5 8400F',
      socket: 'AM5',
      ram_type: 'DDR5',
      tdp_w: 65,
      has_graphics: false,
      price: 9199
    },
    {
      id: 'cpu_15',
      brand: 'Intel',
      name: 'i7-14700KF',
      socket: 'LGA 1700',
      ram_type: 'DDR4 DDR5',
      tdp_w: 253,
      has_graphics: false,
      price: 32799
    },
    {
      id: 'cpu_16',
      brand: 'Intel',
      name: 'Core i5-14400F',
      socket: 'LGA 1700',
      ram_type: 'DDR4 DDR5',
      tdp_w: 148,
      has_graphics: false,
      price: 15899
    },
    {
      id: 'cpu_17',
      brand: 'Intel',
      name: 'Core i5-12400F',
      socket: 'LGA 1700',
      ram_type: 'DDR4 DDR5',
      tdp_w: 117,
      has_graphics: false,
      price: 13199
    },
    {
      id: 'cpu_18',
      brand: 'AMD',
      name: 'Ryzen 5 9600X',
      socket: 'AM5',
      ram_type: 'DDR5',
      tdp_w: 65,
      has_graphics: true,
      price: 17499
    },
    {
      id: 'cpu_19',
      brand: 'AMD',
      name: 'Ryzen 5 5600G',
      socket: 'AM4',
      ram_type: 'DDR4',
      tdp_w: 65,
      has_graphics: true,
      price: 14999
    },
    {
      id: 'cpu_20',
      brand: 'Intel',
      name: 'Core i9-10980XE',
      socket: 'LGA 2066',
      ram_type: 'DDR4',
      tdp_w: 165,
      has_graphics: false,
      price: 89999
    },
  ],
  motherboards: [
    {
      id: 'mb_1',
      brand: 'ASRock',
      name: 'B550M Pro4',
      socket: 'AM4', //должен совпадать с процессором иначе ошибка
      ram_type: 'DDR4', // должен совпадать с типом оперативки
      m2_nvme_support: true, // поддержа NVME дисков 
      price: 9500
    },
    {
      id: 'mb_2',
      brand: 'MSI',
      name: 'MPG B550 GAMING PLUS',
      socket: 'AM4', 
      ram_type: 'DDR4', 
      m2_nvme_support: true, 
      price: 13500
    },
    {
      id: 'mb_3',
      brand: 'GIGABYTE',
      name: 'A520M K V2',
      socket: 'AM4', 
      ram_type: 'DDR4', 
      m2_nvme_support: true, 
      price: 4500
    },
    {
      id: 'mb_4',
      brand: 'MSI',
      name: 'B760 GAMING PLUS WIFI',
      socket: 'LGA 1700', 
      ram_type: 'DDR5', 
      m2_nvme_support: true, 
      price: 9999
    },
    {
      id: 'mb_5',
      brand: 'MSI',
      name: 'B850 GAMING PLUS WIFI',
      socket: 'AM5', 
      ram_type: 'DDR5', 
      m2_nvme_support: true, 
      price: 17999
    },
    {
      id: 'mb_6',
      brand: 'GIGABYTE',
      name: 'B550M AORUS ELITE',
      socket: 'AM4', 
      ram_type: 'DDR4', 
      m2_nvme_support: true, 
      price: 9399
    },
    {
      id: 'mb_7',
      brand: 'MSI',
      name: 'PRO H610M-E',
      socket: 'LGA 1700', 
      ram_type: 'DDR4', 
      m2_nvme_support: true, 
      price: 5399
    },
    {
      id: 'mb_8',
      brand: 'MSI',
      name: 'MAG B850 TOMAHAWK MAX WIFI',
      socket: 'AM5', 
      ram_type: 'DDR4', 
      m2_nvme_support: true, 
      price: 24199
    },
    {
      id: 'mb_9',
      brand: 'GIGABYTE',
      name: 'B550 AORUS ELITE V2',
      socket: 'AM4', 
      ram_type: 'DDR4', 
      m2_nvme_support: true, 
      price: 13699
    },
    {
      id: 'mb_10',
      brand: 'MSI',
      name: 'A520M-A PRO',
      socket: 'AM4', 
      ram_type: 'DDR4', 
      m2_nvme_support: true, 
      price: 4699
    },
    {
      id: 'mb_11',
      brand: 'MSI',
      name: 'B550M PRO-VDH WIFI',
      socket: 'AM4', 
      ram_type: 'DDR4', 
      m2_nvme_support: true, 
      price: 9399
    },
    {
      id: 'mb_12',
      brand: 'GIGABYTE',
      name: 'B760M DS3H',
      socket: 'LGA 1700', 
      ram_type: 'DDR4', 
      m2_nvme_support: true, 
      price: 7999
    },
    {
      id: 'mb_13',
      brand: 'ASRock',
      name: 'B650M Pro RS',
      socket: 'AM5', 
      ram_type: 'DDR5', 
      m2_nvme_support: true, 
      price: 9899
    },
    {
      id: 'mb_14',
      brand: 'ASRock',
      name: 'B760M PG Lightning/D4',
      socket: 'LGA 1700', 
      ram_type: 'DDR4', 
      m2_nvme_support: true, 
      price: 10499
    },
    {
      id: 'mb_15',
      brand: 'GIGABYTE',
      name: 'B550 GAMING X V2',
      socket: 'AM4', 
      ram_type: 'DDR4', 
      m2_nvme_support: true, 
      price: 9499
    },
    {
      id: 'mb_16',
      brand: 'ASRock',
      name: 'Phantom Gaming X870E NOVA WIFI',
      socket: 'AM5', 
      ram_type: 'DDR5', 
      m2_nvme_support: true, 
      price: 32999
    },
    {
      id: 'mb_17',
      brand: 'MSI',
      name: 'B550M PRO-VDH',
      socket: 'AM4', 
      ram_type: 'DDR4', 
      m2_nvme_support: true, 
      price: 8499
    },
    {
      id: 'mb_18',
      brand: 'GIGABYTE',
      name: 'B550M K',
      socket: 'AM4', 
      ram_type: 'DDR4', 
      m2_nvme_support: true, 
      price: 6499
    },
    {
      id: 'mb_19',
      brand: 'MSI',
      name: 'X870 GAMING PLUS WIFI',
      socket: 'AM5', 
      ram_type: 'DDR5', 
      m2_nvme_support: true, 
      price: 21499
    },
    {
      id: 'mb_20',
      brand: 'MSI',
      name: 'PRO B760M-A',
      socket: 'LGA 1700', 
      ram_type: 'DDR4', 
      m2_nvme_support: true, 
      price: 12399
    },

  ],
  ram: [
    {
      id: 'ram_1',
      brand: 'Micron',
      name: 'Crucial 16GB DDR4-3200',
      type: 'DDR4', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 8, // количество гигабайт в 1 плашке
      frequency_mhz: 3200, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 6799
    },
    {
      id: 'ram_2',
      brand: 'Kingston',
      name: 'Fury Beast 32GB DDR4-3200',
      type: 'DDR4', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 16, // количество гигабайт в 1 плашке
      frequency_mhz: 3200, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 26999
    },
    {
      id: 'ram_3',
      brand: 'Kingston',
      name: 'Fury Beast 32GB DDR5-5600',
      type: 'DDR5', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 16, // количество гигабайт в 1 плашке
      frequency_mhz: 5600, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 39999
    },
    {
      id: 'ram_4',
      brand: 'Kingston',
      name: 'Fury Renegade RGB 48GB DDR5-8800',
      type: 'DDR5', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 24, // количество гигабайт в 1 плашке
      frequency_mhz: 3200, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 72799
    },
    {
      id: 'ram_5',
      brand: 'Adata',
      name: 'Adata Premier 16GB DDR4-3200',
      type: 'DDR4', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 8, // количество гигабайт в 1 плашке
      frequency_mhz: 3200, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 12199
    },
    {
      id: 'ram_6',
      brand: 'ADATA',
      name: 'ADATA 32GB DDR5-4800',
      type: 'DDR5', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 16, // количество гигабайт в 1 плашке
      frequency_mhz: 4800, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 34599
    },
    {
      id: 'ram_7',
      brand: 'ADATA',
      name: 'ADATA Gold 32GB DDR5-5600',
      type: 'DDR5', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 32, // количество гигабайт в 1 плашке
      frequency_mhz: 5600, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 46999
    },
    {
      id: 'ram_8',
      brand: 'APACER',
      name: 'APACER Nox 32GB DDR5-5200',
      type: 'DDR5', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 16, // количество гигабайт в 1 плашке
      frequency_mhz: 5200, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 36999
    },
    {
      id: 'ram_9',
      brand: 'Apacer',
      name: 'APACER TEX 32GB DDR4-2666',
      type: 'DDR4', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 16, // количество гигабайт в 1 плашке
      frequency_mhz: 2666, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 26799
    },
    {
      id: 'ram_10',
      brand: 'G.Skill',
      name: 'G.Skill Aegis 16GB DDR4-3200',
      type: 'DDR4', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 8, // количество гигабайт в 1 плашке
      frequency_mhz: 3200, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 14499
    },
    {
      id: 'ram_11',
      brand: 'G.Skill',
      name: 'G.Skill Trident Z5 RGB 32GB DDR5-6000',
      type: 'DDR5', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 16, // количество гигабайт в 1 плашке
      frequency_mhz: 6000, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 44999
    },
    {
      id: 'ram_12',
      brand: 'G.Skill',
      name: 'G.Skill Ripjaws 32GB DDR5-6000',
      type: 'DDR5', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 16, // количество гигабайт в 1 плашке
      frequency_mhz: 6000, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 41999
    },
    {
      id: 'ram_13',
      brand: 'G.Skill',
      name: 'G.Skill Flare X5 16GB DDR5-5600',
      type: 'DDR5', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 8, // количество гигабайт в 1 плашке
      frequency_mhz: 5600, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 26999
    },
    {
      id: 'ram_14',
      brand: 'G.Skill',
      name: 'G.SKill Trident Z5 Royal Neo 32GB DDR5-8000',
      type: 'DDR5', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 16, // количество гигабайт в 1 плашке
      frequency_mhz: 8000, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 53799
    },
    {
      id: 'ram_15',
      brand: 'G.Skill',
      name: 'G.Skill M5 Ripjaws M5 RGB 96GB DDR5-6400',
      type: 'DDR5', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 48, // количество гигабайт в 1 плашке
      frequency_mhz: 6400, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 128499
    },
    {
      id: 'ram_16',
      brand: 'G.Skill',
      name: 'G.Skill Trident Z5 Neo RGB 256GB DDR5-6000',
      type: 'DDR5', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 64, // количество гигабайт в 1 плашке
      frequency_mhz: 6000, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 331999
    },
    {
      id: 'ram_17',
      brand: 'ADATA XPG',
      name: 'ADATA XPG Lancer Blade 32GB DDR5-5600',
      type: 'DDR5', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 16, // количество гигабайт в 1 плашке
      frequency_mhz: 5600, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 38999
    },
    {
      id: 'ram_18',
      brand: 'ADATA XPG',
      name: 'ADATA XPG GAMMIX D35 16GB DDR4-3600',
      type: 'DDR4', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 8, // количество гигабайт в 1 плашке
      frequency_mhz: 3600, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 15299
    },
    {
      id: 'ram_19',
      brand: 'Samsung',
      name: 'Samsung OEM 64GB DDR5-4800',
      type: 'DDR5', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 32, // количество гигабайт в 1 плашке
      frequency_mhz: 4800, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 85999
    },
    {
      id: 'ram_20',
      brand: 'Corsair',
      name: 'Corsair Vengeance 32GB DDR5-6000',
      type: 'DDR5', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 16, // количество гигабайт в 1 плашке
      frequency_mhz: 6000, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 52799
    },
  ],
  gpu: [
    {
        id: 'gpu_1',
        brand: 'Gigabyte',
        name: 'GeForce RTX 3060 Gaming OC',
        vram_gb: 12, // видеопамять 
        tdp_w: 170,     // Важно для расчета БП
        recommended_psu_w: 550, // рекомендованная мощность блока питания
        price: 35000
    },
    {
        id: 'gpu_2',
        brand: 'Sapphire',
        name: 'Radeon RX 7800 XT PURE',
        vram_gb: 16,
        tdp_w: 263,
        recommended_psu_w: 700,
        price: 62000
    },
    {
        id: 'gpu_3',
        brand: 'Palit',
        name: 'GeForce RTX 5060 Dual',
        vram_gb: 8,
        tdp_w: 145,     
        recommended_psu_w: 550, 
        price: 30999
    },
    {
        id: 'gpu_4',
        brand: 'Palit',
        name: 'GeForce RTX 5070 Infinity 3',
        vram_gb: 12, // видеопамять 
        tdp_w: 250,     // Важно для расчета БП
        recommended_psu_w: 650, // рекомендованная мощность блока питания
        price: 57999
    },
    {
        id: 'gpu_5',
        brand: 'MSI',
        name: 'GeForce RTX 5070 VENTUS 3X OC',
        vram_gb: 12, // видеопамять 
        tdp_w: 250,     // Важно для расчета БП
        recommended_psu_w: 650, // рекомендованная мощность блока питания
        price: 60999
    },
    {
        id: 'gpu_6',
        brand: 'MSI',
        name: 'GeForce RTX 5060 VENTUS 2X OC',
        vram_gb: 8, // видеопамять 
        tdp_w: 145,     // Важно для расчета БП
        recommended_psu_w: 550, // рекомендованная мощность блока питания
        price: 31999
    },
    {
        id: 'gpu_7',
        brand: 'GIGABYTE',
        name: 'GeForce RTX 5070 WINDFORCE OC SFF',
        vram_gb: 12, // видеопамять 
        tdp_w: 250,     // Важно для расчета БП
        recommended_psu_w: 750, // рекомендованная мощность блока питания
        price: 61999
    },
    {
        id: 'gpu_8',
        brand: 'ASUS',
        name: 'GeForce RTX 5070 PRIME OC Edition',
        vram_gb: 12, // видеопамять 
        tdp_w: 270,     // Важно для расчета БП
        recommended_psu_w: 750, // рекомендованная мощность блока питания
        price: 69999
    },
    {
        id: 'gpu_9',
        brand: 'Palit',
        name: 'GeForce RTX 5080 GamingPro',
        vram_gb: 16, // видеопамять 
        tdp_w: 360,     // Важно для расчета БП
        recommended_psu_w: 850, // рекомендованная мощность блока питания
        price: 120999
    },
    {
        id: 'gpu_10',
        brand: 'Palit',
        name: 'GeForce RTX 5060 Ti Infinity 3 V1',
        vram_gb: 16, // видеопамять 
        tdp_w: 180,     // Важно для расчета БП
        recommended_psu_w: 600, // рекомендованная мощность блока питания
        price: 49999
    },
    {
        id: 'gpu_11',
        brand: 'Palit',
        name: 'GeForce RTX 5060 Ti Infinity 3 OC',
        vram_gb: 16, // видеопамять 
        tdp_w: 180,     // Важно для расчета БП
        recommended_psu_w: 600, // рекомендованная мощность блока питания
        price: 52799
    },
    {
        id: 'gpu_12',
        brand: 'Palit',
        name: 'GeForce RTX 5060 Infinity 2 OC',
        vram_gb: 8, // видеопамять 
        tdp_w: 170,     // Важно для расчета БП
        recommended_psu_w: 550, // рекомендованная мощность блока питания
        price: 33300
    },
    {
        id: 'gpu_13',
        brand: 'Palit',
        name: 'GeForce RTX 5070 Ti GamingPro-S',
        vram_gb: 16, // видеопамять 
        tdp_w: 250,     // Важно для расчета БП
        recommended_psu_w: 600, // рекомендованная мощность блока питания
        price: 89999
    },
    {
        id: 'gpu_14',
        brand: 'MSI',
        name: 'GeForce RTX 3050 VENTUS 2X XS OC',
        vram_gb: 8, // видеопамять 
        tdp_w: 170,     // Важно для расчета БП
        recommended_psu_w: 550, // рекомендованная мощность блока питания
        price: 24699
    },
    {
        id: 'gpu_15',
        brand: 'Palit',
        name: 'GeForce RTX 5060 Dual OC',
        vram_gb: 8, // видеопамять 
        tdp_w: 170,     // Важно для расчета БП
        recommended_psu_w: 550, // рекомендованная мощность блока питания
        price: 31999
    },
    {
        id: 'gpu_16',
        brand: 'Palit',
        name: 'GeForce RTX 5070 Infinity 3 OC',
        vram_gb: 12, // видеопамять 
        tdp_w: 250,     // Важно для расчета БП
        recommended_psu_w: 600, // рекомендованная мощность блока питания
        price: 60000
    },
    {
        id: 'gpu_17',
        brand: 'MSI',
        name: 'GeForce RTX 5070 Ti GAMING TRIO OC',
        vram_gb: 16, // видеопамять 
        tdp_w: 270,     // Важно для расчета БП
        recommended_psu_w: 700, // рекомендованная мощность блока питания
        price: 107999
    },
    {
        id: 'gpu_18',
        brand: 'MSI',
        name: 'GeForce RTX 3060 VENTUS 2X OC (LHR)',
        vram_gb: 12, // видеопамять 
        tdp_w: 170,     // Важно для расчета БП
        recommended_psu_w: 550, // рекомендованная мощность блока питания
        price: 39999
    },
    {
        id: 'gpu_19',
        brand: 'MSI',
        name: 'GeForce RTX 5060 GAMING OC',
        vram_gb: 8, // видеопамять 
        tdp_w: 170,     // Важно для расчета БП
        recommended_psu_w: 550, // рекомендованная мощность блока питания
        price: 35999
    },
    {
        id: 'gpu_20',
        brand: 'ASRock',
        name: 'AMD Radeon RX 6600 Challenger D',
        vram_gb: 12, // видеопамять 
        tdp_w: 170,     // Важно для расчета БП
        recommended_psu_w: 550, // рекомендованная мощность блока питания
        price: 25999
    },
    ],
    storage: [
    {
        id: 'disk_1',
        brand: 'Samsung',
        name: '980 Pro',
        capacity_gb: 1000,
        type: 'M.2',      // Или NVMe
        interface: 'NVMe', // я ненавижу эти ваши интерфейсы я никогда не мог подумать что проверять диск на совместимость с материнкой будет настолько сложно
        price: 11000
    },
    {
        id: 'disk_2',
        brand: 'WD',
        name: 'Blue',
        capacity_gb: 2000,
        type: 'HDD',
        interface: 'SATA III',
        price: 6000
    },
    {
        id: 'disk_3',
        brand: 'Kingston',
        name: 'Kingston NV3',
        capacity_gb: 1000,
        type: 'M.2',
        interface: 'NVMe',
        price: 13499
    },
    {
        id: 'disk_4',
        brand: 'ADATA',
        name: 'ADATA LEGENG 960 MAX',
        capacity_gb: 4000,
        type: 'M.2',
        interface: 'NVMe',
        price: 43799
    },
    {
        id: 'disk_5',
        brand: 'ADATA',
        name: 'ADATA LEGENG 860',
        capacity_gb: 2000,
        type: 'M.2',
        interface: 'NVMe',
        price: 19799
    },
    {
        id: 'disk_6',
        brand: 'ADATA',
        name: 'ADATA LEGENG 960',
        capacity_gb: 1000,
        type: 'M.2',
        interface: 'NVMe',
        price: 16499
    },
    {
        id: 'disk_7',
        brand: 'Samsung',
        name: 'Samsung 870 EVO',
        capacity_gb: 500,
        type: 'SSD',
        interface: 'SATA',
        price: 14899
    },
    {
        id: 'disk_8',
        brand: 'MSI',
        name: 'MSI SPATIUM S270',
        capacity_gb: 480,
        type: 'SSD',
        interface: 'SATA',
        price: 7999
    },
    {
        id: 'disk_9',
        brand: 'Apacer',
        name: 'Apacer AS350',
        capacity_gb: 128,
        type: 'SSD',
        interface: 'SATA',
        price: 4899
    },
    {
        id: 'disk_10',
        brand: 'Seagate',
        name: 'SkyHawk',
        capacity_gb: 4000,
        type: 'HDD',
        interface: 'SATA III',
        price: 14999
    }
    ],
    psu: [
    {
        id: 'psu_1',
        brand: 'DEEPCOOL',
        name: 'DQ750',
        wattage: 750, // мощность для того чтобы запитать весь пк
        price: 3000
    },
    {
        id: 'psu_2',
        brand: 'Corsair',
        name: 'SF600',
        wattage: 600,
        price: 3000
    },
    {
        id: 'psu_3',
        brand: 'DEEPCOOL',
        name: 'PF750',
        wattage: 750, 
        price: 3699
    },
    {
        id: 'psu_4',
        brand: 'DEEPCOOL',
        name: 'PF600',
        wattage: 600, // мощность для того чтобы запитать весь пк
        price: 3200
    },
    {
        id: 'psu_5',
        brand: 'DEEPCOOL',
        name: 'PF450',
        wattage: 450, // мощность для того чтобы запитать весь пк
        price: 2700
    },
    {
        id: 'psu_6',
        brand: 'Cougar',
        name: 'STC 600',
        wattage: 600, // мощность для того чтобы запитать весь пк
        price: 9000
    },
    {
        id: 'psu_7',
        brand: 'Cougar',
        name: 'GR 850',
        wattage: 850, // мощность для того чтобы запитать весь пк
        price: 6000
    },
    {
        id: 'psu_8',
        brand: 'DEEPCOOL',
        name: 'PF500',
        wattage: 500, // мощность для того чтобы запитать весь пк
        price: 3599
    },
    {
        id: 'psu_9',
        brand: 'DEEPCOOL',
        name: 'PF650',
        wattage: 650, // мощность для того чтобы запитать весь пк
        price: 3400
    },
    {
        id: 'psu_10',
        brand: 'DEEPCOOL',
        name: 'PF700',
        wattage: 700, // мощность для того чтобы запитать весь пк
        price: 3700
    },
    {
        id: 'psu_11',
        brand: 'DEEPCOOL',
        name: 'GamerStorm PQ850G',
        wattage: 850, // мощность для того чтобы запитать весь пк
        price: 8799
    },
    {
        id: 'psu_12',
        brand: 'Cougar',
        name: 'GEC 850',
        wattage: 850, // мощность для того чтобы запитать весь пк
        price: 6000
    },
    {
        id: 'psu_13',
        brand: 'DEEPCOOL',
        name: 'GamerStorm PQ1000G',
        wattage: 1000, // мощность для того чтобы запитать весь пк
        price: 10999
    },
    {
        id: 'psu_14',
        brand: 'DEEPCOOL',
        name: 'PF400',
        wattage: 400, // мощность для того чтобы запитать весь пк
        price: 2350
    },
    {
        id: 'psu_15',
        brand: 'Cougar',
        name: 'GR 750',
        wattage: 750, // мощность для того чтобы запитать весь пк
        price: 9000
    },
    {
        id: 'psu_16',
        brand: 'Deepcool',
        name: 'DQ750',
        wattage: 750, // мощность для того чтобы запитать весь пк
        price: 5800
    },
    {
        id: 'psu_17',
        brand: 'DEEPCOOL',
        name: 'PF550',
        wattage: 550, // мощность для того чтобы запитать весь пк
        price: 3099
    },
    {
        id: 'psu_18',
        brand: 'Cougar',
        name: 'STC500 500W',
        wattage: 500, // мощность для того чтобы запитать весь пк
        price: 2399
    },
    {
        id: 'psu_19',
        brand: 'DEEPCOOL',
        name: 'GamerStorm PQ750G',
        wattage: 750, // мощность для того чтобы запитать весь пк
        price: 8199
    },
    {
        id: 'psu_20',
        brand: 'Cougar',
        name: 'GEC 750',
        wattage: 750, // мощность для того чтобы запитать весь пк
        price: 6300
    },
    ],
})

function cpuAddToBuild(componentID){
  currentBuild.cpu = pcComponents.processors.find((comp)=>comp.id===componentID)
}

function gpuAddToBuild(componentID){
  currentBuild.gpu = pcComponents.gpu.find((comp)=>comp.id===componentID)
}

function diskAddToBuild(componentID){
  currentBuild.disk = pcComponents.storage.find((comp)=>comp.id===componentID)
}

function ramAddToBuild(componentID){
  currentBuild.ram = pcComponents.ram.find((comp)=>comp.id===componentID)
}

function psuAddToBuild(componentID){
  currentBuild.psu = pcComponents.psu.find((comp)=>comp.id===componentID)
}

function mbAddToBuild(componentID){
  currentBuild.mb = pcComponents.motherboards.find((comp)=>comp.id===componentID)
}

const currentBuild = reactive({
    cpu: null,
    gpu: null,
    ram: null,
    disk: null,
    psu: null,
    mb: null
})

export default function useComponents(){
  return {pcComponents,cpuAddToBuild, gpuAddToBuild, diskAddToBuild, ramAddToBuild, psuAddToBuild, mbAddToBuild, currentBuild}
}