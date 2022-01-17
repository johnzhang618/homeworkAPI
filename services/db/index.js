const fakeData = {
  gridState: [
    {
      icon: '⚡️',
      term: 'Power draw',
      value: '1.4',
    },
    {
      icon: '☀️️',
      term: 'Solar power production',
      value: '5.8',
    },
    {
      icon: '🔌️',
      term: 'Fed into grid',
      value: '4.4',
    },
  ],
  devices: [
    {
      name: 'Air conditioner',
      value: '0.3093',
    },
    {
      name: 'Wi-Fi router',
      value: '0.0518',
    },
    {
      name: 'Smart TV',
      value: '0.1276',
    },
    {
      name: 'Diffuser',
      value: '0.0078',
    },
    {
      name: 'Refrigerator',
      value: '0.0923',
    },
  ],
};

const randomGridValue = (current) => (Math.random() * current * 4 + 0.5).toFixed(1);
const randomDeviceValue = (current) => ((Math.random() * current) / 5 + 0.05).toFixed(4);

module.exports = {
  queryReadings: (start, end) => {
    const hour = 1000 * 60 * 60;
    const readings = [];
    let i = 0;
    do {
      readings.push({
        time: end - (hour * i),
        value: Math.random() * 0.7 + 0.4,
      });
      i += 1;
    }
    while (end - (hour * i) > start);
    return readings;
  },

  queryGridState: () => {
    const current = (new Date()).getHours() / 24;
    const powerDraw = randomGridValue(current);
    const fedGrid = randomGridValue(current);
    return {
      powerDraw,
      fedGrid,
      solarPower: (parseFloat(powerDraw) + parseFloat(fedGrid)).toFixed(1),
    };
  },

  queryDevicesStates: () => {
    const current = (new Date()).getHours() / 24;
    return [...new Array(fakeData.devices.length)].map((_, index) => ({
      id: index,
      name: fakeData.devices[index].name,
      value: randomDeviceValue(current),
    }));
  },
};
