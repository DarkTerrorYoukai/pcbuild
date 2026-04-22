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
      price: 12500
    },
    {
      id: 'cpu_2',
      brand: 'Intel',
      name: 'Core i5-11400H', 
      socket: 'LGA1200',
      ram_type: 'DDR4',
      tdp_w: 65,
      has_graphics: true,
      price: 11000
    }
  ],
  motherboards: [
    {
      id: 'mb_1',
      brand: 'ASRock',
      name: 'B550M Pro4',
      socket: 'AM4', //должен совпадать с процессором иначе ошибка
      form_factor: 'Micro-ATX', // для проверки вместимости в корпус
      ram_type: 'DDR4', // должен совпадать с типом оперативки
      ram_slots: 4, // количество слотов оперативной памяти
      m2_slots: 2, // количество слотов для дисков m2
      m2_nvme_support: true, // поддержа NVME дисков 
      sata_slots: 6, // количество слотов для SATA
      price: 9500
    }
  ],
  ram: [
    {
      id: 'ram_1',
      brand: 'Micron',
      name: 'Crucial 8GB DDR4-3200',
      type: 'DDR4', // обязательно должен совпадать с типом оперативки на материнке и на процессоре(?)
      capacity_gb: 8, // количество гигабайт в 1 плашке
      modules_count: 1, // 1 плашка на 8 ГБ
      frequency_mhz: 3200, //для фильтрации и подбора идеальной пары к процессору/плате.
      price: 1800
    }
  ],
  gpu: [
    {
        id: 'gpu_nv_3060',
        brand: 'Gigabyte',
        model: 'GeForce RTX 3060 Gaming OC',
        chipset: 'NVIDIA RTX 3060',
        vram_gb: 12, // видеопамять 
        length_mm: 282, // Важно для совместимости с корпусом
        tdp_w: 170,     // Важно для расчета БП
        recommended_psu_w: 550, // рекомендованная мощность блока питания
        interface: 'PCI-E 4.0', // поле содержит чисто информационный характер
        price: 35000
    },
    {
        id: 'gpu_amd_7800xt',
        brand: 'Sapphire',
        model: 'Radeon RX 7800 XT PURE',
        chipset: 'AMD RX 7800 XT',
        vram_gb: 16,
        length_mm: 320, 
        tdp_w: 263,
        recommended_psu_w: 700,
        interface: 'PCI-E 4.0',
        price: 62000
    }
    ],
    storage: [
    {
        id: 'ssd_m2_1',
        brand: 'Samsung',
        name: '980 Pro',
        capacity_gb: 1000,
        type: 'M.2',      // Или NVMe
        interface: 'NVMe', // я ненавижу эти ваши интерфейсы я никогда не мог подумать что проверять диск на совместимость с материнкой будет настолько сложно
        form_factor: '2280',  // Стандарт для M.2
        price: 11000
    },
    {
        id: 'hdd_sata_1',
        brand: 'WD',
        name: 'Blue',
        capacity_gb: 2000,
        type: 'HDD',
        interface: 'SATA III',
        form_factor: '3.5"', // Важно для места в корпусе
        price: 6000
    }
    ],
    psu: [
    {
        id: 'psu_atx_750',
        brand: 'Deepcool',
        model: 'DQ750',
        wattage: 750, // мощность для того чтобы запитать весь пк
        form_factor: 'ATX', // Подойдет для большинства корпусов
        price: 9000
    },
    {
        id: 'psu_sfx_600',
        brand: 'Corsair',
        model: 'SF600',
        wattage: 600,
        form_factor: 'SFX', // Для компактных корпусов
        price: 15000
    }
    ],
    cases: [
    {
        id: 'case_atx_1',
        brand: 'Deepcool',
        name: 'Matrexx 55 V3',
        supported_mb: ['ATX', 'Micro-ATX', 'Mini-ITX'], // Массив для проверки
        max_gpu_length: 370,      // Сравнить с gpu.length_mm
        max_cooler_height: 160,   // Сравнить с высотой кулера
        supported_psu: ['ATX'], // габариты блока питания
        HDD_slots: 2,      // Слоты под HDD
        SSD_slots: 4,      // Слоты под SSD SATA
        price: 5500
    },
    {
        id: 'case_mini_1',
        brand: 'Cooler Master',
        name: 'MasterBox NR200P',
        supported_mb: ['Mini-ITX'],
        max_gpu_length: 330,
        max_cooler_height: 155,
        supported_psu: ['SFX', 'SFX-L'],
        HDD_slots: 0,      // Слоты под HDD
        SSD_slots: 0,      // Слоты под SSD SATA
        price: 10000
    }
    ]
        
});