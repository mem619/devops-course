import {default as data} from './data.js';

const dashboard = {
  build: new Image(),
  code: new Image(),
  release: new Image(),
  plan: new Image(),
  monitor: new Image(),
  operate: new Image(),
  deploy: new Image(),
  test: new Image()
}
const size = {
  dash: {
    height: 438,
    width: 920
  }
}
let mouseX = 0;
let mouseY = 0;
let clickTopic = null;
let _width = window.innerWidth;
let _height= window.innerHeight;


const getDashboardElement = (x, y) => {
  let element = [];
  for(let icon in dashboard) {
    if(dashboard[icon].xdataImage) {
      const arrayzone = Array.isArray(dashboard[icon].xdataImage) ? dashboard[icon].xdataImage: [dashboard[icon].xdataImage];
      
      arrayzone.forEach( (xdataImage) => {
        const validateX = x >=(size.dash.offsetX + xdataImage.offsetX) && x <= (xdataImage.offsetX + size.dash.offsetX + xdataImage.width);
        const validateY = y >=(size.dash.offsetY + xdataImage.offsetY) && y <= (xdataImage.offsetY +size.dash.offsetY + xdataImage.height);
        
        if(validateX && validateY){
          element.push(dashboard[icon]);
        }           
      })
    } 
  }
  
  return element;
};

const isPointInside = (x, y) => {
  const element = getDashboardElement(x,y);

  if(element.length > 0) {
    element.forEach(elm => elm.xhover = true);
  }  
  
  for(let icon in dashboard) {
    if(element.filter(a=> a.src == dashboard[icon].src).length == 0){
      dashboard[icon].xhover = false;
    }
  }

  $("#canvas").css({cursor:(element.length > 0)? 'pointer' : 'unset'});  
}

const change = (element, names) => {
  let data = 6;
  const interval = setInterval(() => {
    if(data == 0) {
      clearInterval(interval);
      $('#exampleModal').modal({backdrop: 'static', keyboard: false});
      loadData(names);
      clickTopic = names;
      return;
    }
    element.xClick = ((data % 2) == 0);
    element.xhover = !((data % 2) == 0);
    
    data--;
  }, '10');
}

const clickDashData= (x, y) => {
  const element = getDashboardElement(x,y);

  for(let icon in dashboard) {
    if(element.filter(a=> a.src == dashboard[icon].src).length == 0){
      dashboard[icon].xClick = false;
    }
  }
  
  if(element.length > 0) {
    change(element[0], element.map(el=>{
      return Array.isArray(el.xdataImage) ? el.xdataImage[0].id : el.xdataImage.id;
    }).join(','));
  }  
}

const loadData = (theme, topic='summary') => {
  $(".slides.active").remove();  
  $(".title-x").html("");
  if(data[theme]){
    loads[topic](theme);
    $("#modal-title").html(`${theme}/${topic}`);
  }
}


const gotoUrl = (event) => {
  const prop = event.data ? event.data.prop : 'name';
  window.open(event.target[prop]);
};

function chunkArray(myArray, chunk_size){
  var results = [];
  
  while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
  }
  
  return results;
}

const loads = {
  summary : (theme)=> {
    $(".modal-body").html(data[theme].summary.content);
  },
  summary_images:(theme, prop = "summary_images") => {
    $("slides.active").remove();
    $(".nav-dots").html("");
    const $slidesTemplate = $(".slides-template").clone();
    const $templateImage = $(".template-image");
    $slidesTemplate
      .removeClass("slides-template")
      .addClass("active");
    const slides = data[theme][prop];
    let cont = 1;
    $(".modal-body").html("").append($slidesTemplate);
    
    slides.map((el)=>{
      const slide = $templateImage.clone();
      slide.find("input").prop("id", `img-${cont}`);
      slide.find("img").prop('src',el.url);

      if(cont == 1) {
        slide.find("input").attr('checked','checked');
        slide.find(".prev").prop("for", `img-${slides.length}` );
        slide.find(".next").prop("for", `img-${cont + 1}`);
        $(".title-x").html(el.title);        
      }else {        
        if(cont< slides.length) {
          slide.find(".prev").prop("for", `img-${cont - 1}`);
          slide.find(".next").prop("for", `img-${cont + 1}`);   
        }else {;
          slide.find(".prev").prop("for", `img-${cont - 1}`);
          slide.find(".next").prop("for", `img-${1}`);   

        }
      }
      $(".modal-body .slides .nav-dots").before(slide.html());
      $(".nav-dots").append(
        `<label for="img-${cont}" class="nav-dot" id="img-dot-${cont}"></label>`
      );
      slide.remove();
      cont++;
    });

    $('input[name="radio-btn"]').click((e)=> {
      let index = e.target.id.replace("img-","") - 1;
      $(".title-x").html(data[theme][prop][index].title);
    })     
  },
  examples: (theme) => {
    loads.summary_images(theme, "examples")
  },
  links:(theme) => {
    $(".modal-body").html("");
    $(".modal-body").append("<div class='row links'></div>")
    data[theme].links.map(el => {
      $(".modal-body .row").append(`
      <div class="col-6">
        <button 
        type="button" 
        class="btn
          cursor-pointer
          btn-linked
          btn-secondary 
          btn-lg
          btn-block" 
        name='${el.url}'
      >${el.title}</button>
      </div>
      `);
    });
    
    $('.btn-linked').on('click', gotoUrl);
  }, 
  resources: (theme) => {    
    $(".modal-body").html("");
    let resources = [];
    data[theme].resources.map(el=>{
      let newResource = `
      <div class="card" title='${el.url}'>
        <div class="icon" title='${el.url}'>
          <i class="material-icons md-36">alternate_email</i>
        </div>
        <p class="title" title='${el.url}'>${el.title}</p>
        <p class="text" title='${el.url}'>
          ${el.url.substring(0,80)}.
        </p>
      </div>
      `    
      resources.push(newResource);
    });
    chunkArray(resources, 3).map(data=>{    
      const insertD =`
        <div class='content-card'>
          ${data.join("")}
        </div>
      `;
      $(".modal-body").append(insertD);
    });
    
    $(".card").on("click", {prop: 'title'}, gotoUrl);
  }
}

function init() {
  let canvasOffset = $("#canvas").offset();
  let offsetX = canvasOffset.left;
  let offsetY = canvasOffset.top;

  $("#canvas").mousemove((e) => {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    isPointInside(mouseX, mouseY);
  });

  $("#canvas").click((e) => {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    clickDashData(mouseX, mouseY);
  })

  dashboard.build.src = "./img/dash-build.png";
  dashboard.code.src = "./img/dash-code.png";
  dashboard.plan.src = "./img/dash-plan.png";
  dashboard.release.src = "./img/dash-release.png";
  dashboard.monitor.src = "./img/dash-monitor.png";
  dashboard.operate.src = "./img/dash-operate.png";
  dashboard.deploy.src = "./img/dash-deploy.png";
  dashboard.test.src = "./img/dash-test.png";
  
  dashboard.code.xdataImage = {
    id: "code",
    offsetX: 60,
    offsetY: 0,
    width:270,
    height: 100
  };
  dashboard.build.xdataImage = {
    id: "build",
    offsetX: 10,
    offsetY: 70,
    width: 136,
    height: 280
  };
  dashboard.test.xdataImage = {
    id: "test",
    offsetX: 60,
    offsetY: 320,
    width: 270,
    height: 130
  };
  dashboard.deploy.xdataImage = {
    id: "deploy",
    offsetX: 550,
    offsetY: 0,
    width: 300,
    height: 100
  };
  dashboard.operate.xdataImage = {
    id: "operate",
    offsetX: 790,
    offsetY: 80,
    width: 136,
    height: 280
  };
  dashboard.monitor.xdataImage = {
    id: "monitor",
    offsetX: 550,
    offsetY: 320,
    width: 320,
    height: 130
  };
  dashboard.plan.xdataImage = [{
    id: "plan",
    offsetX: 300,
    offsetY: 80,
    width: 150,
    height: 110
  },{
    id: "plan",
    offsetX: 450,
    offsetY: 235,
    width: 150,
    height: 110
  }];
  dashboard.release.xdataImage = [{
    id: "release",
    offsetX: 450,
    offsetY: 80,
    width: 150,
    height: 145
  },{
    id: "release",
    offsetX: 300,
    offsetY: 200,
    width: 150,
    height: 160
  }];

  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  canvas.width = _width;
  canvas.height = _height;

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 300, 300); 

  size.dash.offsetX =(_width - size.dash.width) /2;
  size.dash.offsetY =(_height - size.dash.height) /2;
  for(let prop in dashboard) {
    dashboard[prop].xwidth = size.dash.width;
    dashboard[prop].xheight = size.dash.height;
    if(dashboard[prop].xhover) {
      ctx.globalCompositeOperation = "source-over";
    } else {
      ctx.globalCompositeOperation = "destination-over";
    }
    ctx.drawImage(
      dashboard[prop], 
      size.dash.offsetX - (dashboard[prop].xhover && !dashboard[prop].xClick? 30 : 0), 
      size.dash.offsetY - (dashboard[prop].xhover&& !dashboard[prop].xClick? 30 : 0), 
      dashboard[prop].xwidth + (dashboard[prop].xhover&& !dashboard[prop].xClick? 30 : 0), 
      dashboard[prop].xheight + (dashboard[prop].xhover&& !dashboard[prop].xClick? 30 : 0)
    );
  }

  window.requestAnimationFrame(draw);
}

$( document ).ready(
  () => {
    init();
    $('[data-toggle="tooltip"]').tooltip()

    const toggle = (event) => {
      const visible = event.data != undefined ? event.data.visible : !$("#menu-open").prop("checked");
      $("#menu-open").prop("checked", visible);
      const excecute = $(event.target).closest(".menu-item").prop("id");
      if(excecute) {
        loadData(clickTopic, excecute)
      }
    };
    $('.modal-header').on('dblclick', ()=>{
     $(".modal-dialog").css("transform", $(".modal-dialog").css("transform") == 'none' ? 'scale(1.5)' : 'none');
     $(".modal-dialog").css("margin-top", $(".modal-dialog").css("margin-top") != '0px' ? '106px' : '0px' );
    });
    $('.devops-label').on('click', ()=>{
      $('#exampleModal').modal({backdrop: 'static', keyboard: false});
      loadData("devops");
      clickTopic = "devops";
    });

    $('.menu-item').on('click', toggle);
    $('.close-icon').on('click',{ visible: false }, toggle);
  }
);