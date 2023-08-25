import { model } from "./js/Os.mjs";

function router([data] = model) {
  const models = data.model;
  const speed = data.speed;
  const times = data.times;
  const { user, nice, sys, idle, irq } = times;

  console.log(
    `model:${models}
     speed:${speed}  
     user:${user}
     nice:${nice}
     sys:${sys}
     idele:${idle} 
     irq:${irq}
     `
  );
}

router(model());
