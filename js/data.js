const plan = {
  summary: {
    content: `
    <div class="data-sumary">
      <h2 class="title">Planning</h2>
      <img src="https://i.blogs.es/880e18/stratgia-proceso-de-planificacion-estrategica/1366_2000.jpg" style="  display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;">
      <p class="summary">
        Todo proyecto requiere una visión que indique a los implicados -sean directos o indirectos- el motivo y fin del trabajo a realizar, definiendo un conjunto de funcionalidades que permitan aportar valor en cada iteración, estipular los criterios de aceptación y la definición de echo; para cada una de las fases, en el conjunto del proyecto.
      </p>
      <p>                
        Esto se establece como una Pila de Producto, que está soportando continuadamente un proceso de “jardinería”, desde un punto de vista de negocio, la cual alimenta a las diferentes fases de desarrollo y operaciones, y aborda los cambios y evoluciones según un proceso de mejora continua basado en un feedback temprano y continuo.
      </p>
      <a href="https://proyectosagiles.org/2008/10/20/jardin-ejemplo-scrum/">Fabula jardin</a>
    </div>
    `
  },
  summary_images: [
    {
      url: "../img/plan/sumary_1.png",
      title: "Trabajo a elaborar."
    },
    {
      url: "../img/plan/sumary_2.jpg",
      title: "Concepto de proceso."
    },
    {
      url: "../img/plan/sumary_3.jpg",
      title: "Metodos, artefactos, definiciones, roles."
    },
    {
      url: "../img/plan/sumary_4.PNG",
      title: "Evolucion, calidad, entregas"
    }
  ],
  examples: [{
    title: "Administracion del trabajo.",
    url:"../img/plan/ex0.PNG"    
  },{
    title: "Planeacion de gestion del proyecto",
    url:"../img/plan/ex1.PNG"    
  },{
    title: "Planeacion de pruebas",
    url:"../img/plan/ex2.PNG"    
  },{
    title: "Tareas de ejecucion de pruebas",
    url:"../img/plan/ex3.PNG"    
  },{
    title: "Estado de los elementos de trabajo.",
    url:"../img/plan/ex4.PNG"    
  }],
  links: [
    {
      title: "planning step-by-step",
      url: "https://monday.com/blog/project-management/agile-planning/"
    },
    {
      title: "agile planning processes",
      url: "https://www.pmi.org/learning/library/agile-guide-planning-agile-approach-6837"
    },
    {
      title: "sprint planning",
      url: "https://proyectosagiles.org/planificacion-iteracion-sprint-planning/"
    },
    {
      title: "how to plan",
      url: "https://beagilemyfriend.com/sprint-planning/"
    },
    {
      title: "planning Levels",
      url: "https://www.knowledgehut.com/blog/agile/what-is-agile-planning-agile-planning-levels"
    }
  ],
  resources: [
    {
      title: "Asana",
      url: "https://asana.com/es/product"
    },
    {
      title: "Jira Software",
      url: "https://www.atlassian.com/software/jira/guides/use-cases/what-is-jira-used-for"
    },
    {
      title: "Azure Boards",
      url: "https://docs.microsoft.com/en-us/azure/devops/boards/get-started/what-is-azure-boards?view=azure-devops&tabs=agile-process"
    },
    {
      title: "ClickUp",
      url: "https://clickup.com/"
    },
    {
      title: "Zoho",
      url: "https://www.zoho.com/es-xl/sprints/"
    },
    {
      title: "ZenHub",
      url: "https://www.zenhub.com/"
    },
    
  ]
};

const code = {
  summary: {
    content: `
    <div class="data-sumary">
      <h2 class="title">Code & Develop</h2>
      <img src="../img/code/summary.jpg" style="  display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;">
      <p class="summary">
        Esta fase es donde se construye el proyecto. Implica el diseño del software y la creación del código según los requisitos del cliente. En el lado de operaciones se construyen todos los automatismos necesarios para la distribución y mantenimiento del software. 
      </p>
      <p>                
        En esta etapa de DevOps, el codigo y su versionado se lleva a cabo constantemente.
        Los desarrolladores almacenarán el código en un administrador de código que permite la visualización histórica, las ramas, el control de versiones y más.
      </p>
      <a href="http://johanachuquino.com/disenar-una-correcta-arquitectura-de-software/">Creacion de solucion de software</a>
    </div>
    `
  },
  summary_images: [
    {
      url: "../img/code/summary_1.jpg",
      title: "Definicion de tecnologias y arquitectura."
    },
    {
      url: "../img/code/summary_2.png",
      title: "Estrategia de versionado y revision."
    },
    {
      url: "../img/code/summary_3.jpg",
      title: "Codificacion de solucion y artefactos."
    },
    {
      url: "../img/code/summary_4.png",
      title: "Mecanismos de automatizacion, pruebas."
    }
  ],
  examples: [{
    title: "Repositorios de codigo",
    url:"../img/code/ext1.PNG"    
  },{
    title: "Versionado de codigo",
    url:"../img/code/ext2.PNG"    
  },{
    title: "Definicion de solucion",
    url:"../img/code/ext3.PNG"    
  }],
  links: [
    {
      title: "patrones de arquitectura de software",
      url: "https://medium.com/@maniakhitoccori/los-10-patrones-comunes-de-arquitectura-de-software-d8b9047edf0b"
    },
    {
      title: "patrones de aquitectura backend",
      url: "https://www.adictosaltrabajo.com/2019/07/02/capas-cebollas-y-colmenas-arquitecturas-en-el-backend/"
    },
    {
      title: "patrones de desarrollo.",
      url: "https://www.spainclouds.com/blog/impresionantes-patrones-de-diseno-de-software"
    },
    {
      title: "guia rapida git",
      url: "https://rogerdudler.github.io/git-guide/index.es.html"
    },
    {
      title: "estrategias de branching",
      url: "https://nvie.com/posts/a-successful-git-branching-model/"
    },
    {
      title: "gitflow",
      url: "https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow"
    }    
  ],
  resources: [
    {
      title: "GitLab",
      url: "https://about.gitlab.com/"
    },
    {
      title: "GitHub",
      url: "http://github.com/"
    },{
      title: "Bitbucket",
      url: "https://bitbucket.org/product"
    },{
      title: "spring Boot setup",
      url: "https://spring.io/guides/gs/spring-boot/"
    },{
      title: "dotnet project setup",
      url: "https://code.visualstudio.com/docs/languages/dotnet"
    },{
      title: "node project setup",
      url: "https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/"
    }  ,{
      title: "msbuild",
      url: "https://docs.microsoft.com/en-us/visualstudio/msbuild/msbuild?view=vs-2019"
    } 
  ]
};

const build = {
  summary: {
    content: `
    <div class="data-sumary">
      <h2 class="title">Build & package</h2>
      <img src="../img/build/summary.jpg" style="  display: block;
        margin-left: auto;
        margin-right: auto;
        width: 20%;">
      <p class="summary">
      En esta fase se gestionan las versiones y las compilaciones del software y se utilizan herramientas automatizadas que ayudan a compilar y crear paquetes de código para publicarlos después en producción.
      </p>
      <p>                
      Estos artefactos o paquetes componen nuestro software, incluyendo funcionalidades liberadas. Este proceso es crítico, ya que un error en la fusión del software puede provocar que deje de funcionar.
      </p>
    </div>
    `
  },
  summary_images: [
    {
      url: "../img/build/summary_1.png",
      title: "Compilados, paquetes de solucion, artefactos"
    },
    {
      url: "../img/build/summary_2.png",
      title: "Control de versiones de compilado"
    },
    {
      url: "../img/build/summary_3.png",
      title: "Formato de versiones."
    },
    {
      url: "../img/build/summary_4.png",
      title: "Liberacion de version a ambiente productivo"
    }
  ],
  examples: [{
    title: "Build Dashboard, Projects",
    url:"../img/build/ex1.png"    
  },{
    title: "Build Plan",
    url:"../img/build/ex2.png" 
  },{
    title: "Build stages & jobs, task",
    url:"../img/build/ex3.png" 
  },{
    title: "Scripting Task",
    url:"../img/build/ex4.png" 
  },{
    title: "Template Sonar Task",
    url:"../img/build/ex5.png" 
  }],
  links: [
    {
      title: "configurando artefactos",
      url: "https://confluence.atlassian.com/bamboo/configuring-a-job-s-build-artifacts-289277071.html"
    },
    {
      title: "trabajar con artefactos",
      url: "https://www.jetbrains.com/help/idea/working-with-artifacts.html"
    },
    {
      title: "tags de versiones git.",
      url: "https://git-scm.com/book/en/v2/Git-Basics-Tagging"
    },
    {
      title: "guia inicial bamboo",
      url: "https://confluence.atlassian.com/bamboo/getting-started-with-bamboo-289277283.html"
    },
    {
      title: "requerimientos bamboo",
      url: "https://confluence.atlassian.com/bamboo/bamboo-best-practice-system-requirements-388401170.html"
    },{
      title: "bamboo job",
      url: "https://confluence.atlassian.com/bamboo/configuring-jobs-289277061.html"
    },{
      title: "bamboo tasks",
      url: "https://confluence.atlassian.com/bamboo/configuring-jobs-289277061.html"
    },{
      title: "azure devops pipelines",
      url: "https://docs.microsoft.com/en-us/azure/devops/pipelines/create-first-pipeline?view=azure-devops&tabs=net%2Cyaml%2Ctfs-2018-2%2Cbrowser"
    },{
      title: "azure devops tasks",
      url: "https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/?view=azure-devops"
    }
    
  ],
  resources: [
    {
      title: "Bamboo",
      url: "https://www.atlassian.com/software/bamboo"
    },
    {
      title: "Azure pipelines",
      url: "https://azure.microsoft.com/en-us/services/devops/pipelines/"
    },
    {
      title: "Chef",
      url: "https://www.chef.io/"
    },
    {
      title: "CircleCI",
      url: "https://circleci.com/"
    },
    {
      title: "Jenkins",
      url: "https://www.jenkins.io/"
    },
    {
      title: "Travis CI",
      url: "https://travis-ci.org/"
    },{
      title: "Heroku",
      url: "https://www.heroku.com/"
    },{
      title: "Bitbucket",
      url: "https://bitbucket.org/product"
    }    
  ]
};

const test = {
  summary: {
    content: `
    <div class="data-sumary">
      <h2 class="title">Testing</h2>
      <img src="../img/test/summary.jpg" style="  display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;">
      <p class="summary">
      Aquí es el momento de ejecutar todas las pruebas que verifiquen el correcto funcionamiento de todas las características. En esta fase es importante contar con unas buenas pruebas para verificar que todas las funcionalidades que ya existían siguen operativas. En el caso en que alguna prueba no sea satisfactoria, habremos de realizar la corrección volviendo a la fase de desarrollo.
      </p>
      <p>                
      La automatización permite a los desarrolladores realizar pruebas continuas a través de herramientas como Selenium o JUnit para probar múltiples bases de código en paralelo. Una estrategia de prueba automatizada asegura que no haya fallas en la funcionalidad de una aplicación.
      </p>
    </div>
    `
  },
  summary_images: [
    {
      url: "../img/test/summary_1.jpg",
      title: "Beneficios de testeo automatizado"
    },
    {
      url: "../img/test/summary_2.jpg",
      title: "Busqueda de defectos"
    },
    {
      url: "../img/test/summary_3.jpg",
      title: "Validacion de funcionalidad"
    },
    {
      url: "../img/test/summary_4.jpg",
      title: "Metricas de mejora"
    },
    {
      url: "../img/test/summary_5.jpg",
      title: "Buenas practicas de testing"
    }
  ],
  examples: [{
    title: "Build Testing Projects",
    url:"../img/test/ex1.png"    
  },{
    title: "Runs builds",
    url:"../img/test/ex2.png"  
  },{
    title: "Runs builds",
    url:"../img/test/ex3.png"  
  },{
    title: "Katalon script automate task",
    url:"../img/test/ex4.png"  
  },{
    title: "Katalon script automate log",
    url:"../img/test/ex5.png"  
  },{
    title: "Katalon Studio",
    url:"../img/test/ex6.png"  
  }],
  links: [
    {
      title: "Testing automatizado",
      url: "https://www.guru99.com/automation-testing.html#:~:text=Automation%20Testing%20or%20Test%20Automation,execute%20a%20test%20case%20suite.&text=The%20automation%20testing%20software%20can,and%20generate%20detailed%20test%20reports."
    },{
      title: "Tecnicas de testing automatizado",
      url: "https://www.indiumsoftware.com/blog/automated-testing-techniques/"
    },{
      title: "tdd-vs-bdd-vs-atdd",
      url: "https://www.browserstack.com/guide/tdd-vs-bdd-vs-atdd"
    },{
      title: "Test Automation Strategy",
      url: "https://www.edureka.co/blog/test-automation-strategy/?ranMID=42536&ranEAID=a1LgFw09t88&ranSiteID=a1LgFw09t88-Egaq8DRt1r5YVTM2F2BFpA&LSNSUBSITE=Omitted_a1LgFw09t88"
    }
    
  ],
  resources: [
    {
      title: "Katalon",
      url: "https://www.katalon.com/"
    },{
      title: "Selenium",
      url: "https://www.selenium.dev/"
    },{
      title: "NUnit",
      url: "https://nunit.org/"
    },{
      title: "JUnit",
      url: "https://junit.org/junit5/"
    },{
      title: "Jasmine",
      url: "https://jasmine.github.io/"
    },{
      title: "Cucumber",
      url: "https://cucumber.io/"
    },{
      title: "Newman",
      url: "https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/#:~:text=Newman%20is%20a%20command%20line,directly%20from%20the%20command%20line.&text=Newman%20maintains%20feature%20parity%20with,the%20collection%20runner%20in%20Postman."
    }    
  ]
};

const release = {
  summary: {
    content: `
    <div class="data-sumary">
      <h2 class="title">Release</h2>
      <img src="../img/release/summary.jpg" style="  display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;">
      <p class="summary">
      En esta fase, la nueva funcionalidad se integra con el código existente y se llevan a cabo las pruebas. El desarrollo continuo sólo es posible debido a la integración y las pruebas continuas.
      </p>
      <p>                
      Una organización puede programar tantas implementaciones por día como necesite, en función de los requisitos y la velocidad de su equipo.
      </p>
    </div>
    `
  },
  summary_images: [
    {
      url: "../img/release/summary_1.png",
      title: "Ambientes y liberaciones a versiones estables"
    },
    {
      url: "../img/release/summary_2.jpg",
      title: "Versiones validadas, listas para produccion"
    },
    {
      url: "../img/release/summary_3.png",
      title: "Establecer versiones mayores o con cambios significativos"
    }
  ],
  examples: [{
    title: "Release versions",
    url:"../img/release/ex1.png"    
  },{
    title: "Release deploy, artefacts",
    url:"../img/release/ex2.png"    
  },{
    title: "Release creation",
    url:"../img/release/ex4.png"    
  },{
    title: "Release Azure DevOps",
    url:"../img/release/ex3.png"    
  }],
  links: [
    {
      title: "release management",
      url: "https://victorops.com/blog/devops-release-management-best-practices#:~:text=In%20DevOps%2C%20release%20management%20is,feedback%20loops%20and%20faster%20releases."
    },{
      title: "release pipelines azure",
      url: "https://victorops.com/blog/devops-release-management-best-practices#:~:text=In%20DevOps%2C%20release%20management%20is,feedback%20loops%20and%20faster%20releases."
    },{
      title: "release steps",
      url: "https://www.lucidchart.com/blog/release-management-process"
    }
    
  ],
  resources: [
    {
      title: "Bamboo release",
      url: "https://confluence.atlassian.com/bamboo/managing-deployment-projects-351764927.html"
    },{
      title: "Azure Devops release",
      url: "https://docs.microsoft.com/en-us/azure/devops/pipelines/release/triggers?view=azure-devops"
    },{
      title: "jenkins release",
      url: "https://plugins.jenkins.io/release/"
    }
  ]
};

const deploy = {
  summary: {
    content: `
    <div class="data-sumary">
      <h2 class="title">Deploy</h2>
      <img src="../img/deploy/summary.png" style="  display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;">
      <p class="summary">
      Uno de los objetivos principales de DevOps es agilizar el paso de un software que se está desarrollando a una versión funcional. Esto se hace con técnicas que permiten automatizar esta transición y corregir posibles errores que puedan surgir en el proceso.
      </p>
      <p>
      Programación de despliegues: se realiza a través de herramientas que permiten programar los despliegues, disponiendo de una trazabilidad completa de lo que se despliega en cada entrega.
      </p>
      <p>
      Transición entre entornos: es fundamental que el software mantenga su integridad a lo largo de las distintas fases, ya que pueden sufrir ajustes durante la transición entre fases.      
      </p>
    </div>
    `
  },
  summary_images: [
    {
      url: "../img/deploy/summary_1.jpg",
      title: "Version release"
    },
    {
      url: "../img/deploy/summary_2.png",
      title: "Environment deploy"
    },
    {
      url: "../img/deploy/summary_3.jpg",
      title: "Deploy automation"
    }
  ],
  examples: [{
    title: "Deploy Dashboard",
    url:"../img/deploy/ex1.png"    
  },{
    title: "Deployment plan",
    url:"../img/deploy/ex2.png"    
  },{
    title: "Deployment environment",
    url:"../img/deploy/ex3.png"    
  },{
    title: "Build Plan",
    url:"../img/deploy/ex4.png"    
  },{
    title: "Deployment task",
    url:"../img/deploy/ex5.png"    
  }],
  links: [
    {
      title: "Application Deployments",
      url: "https://www.enterprise-architecture.org/docs/application_architecture/application_deployments/"
    },{
      title: "Deployment",
      url: "https://wiki.en.it-processmaps.com/index.php/Release_and_Deployment_Management"
    },{
      title: "Deployment Management",
      url: "https://www.sciencedirect.com/topics/computer-science/deployment-management"
    }
  ],
  resources: [
    {
      title: "Amazon EC2",
      url: "https://aws.amazon.com/es/ec2/"
    },{
      title: "Amazon S3",
      url: "https://aws.amazon.com/es/ec2/"
    },{
      title: "Heroku",
      url: "https://www.heroku.com/"
    },{
      title: "Rackspace",
      url: "rackspace.com/cloud"
    }, {
      title: "Browserstack",
      url: "https://www.browserstack.com/"
    },{
      title: "Google Cloud",
      url: "https://cloud.google.com/"
    }   
  ]
};

const operate = {
  summary: {
    content: `
    <div class="data-sumary">
      <h2 class="title">Operate</h2>
      <img src="../img/operate/summary.png" style="  display: block;
        margin-left: auto;
        margin-right: auto;
        width: 30%;">
      <p class="summary">
      Nuestro sistema necesita de actualizaciones en función de su uso. Esta fase del personal de operaciones mide los recursos disponibles y los ajusta en función de las nuevas necesidades del software. Se elaboran nuevas métricas con las que vigilar el sistema.
      </p>
      <p>                
      Un factor clave es realizar un seguimiento de problemas y cambios, para que se puedan identificar y resolver de una forma ágil. Esto requiere una comunicación muy fluida entre los distintos equipos que intervienen en DevOps.
      </p>
    </div>
    `
  },
  summary_images: [
    {
      url: "../img/operate/sumary_1.png",
      title: "Infraestructure monitoring"
    },
    {
      url: "../img/operate/sumary_2.png",
      title: "Prevencion de errores, mal rendimiento."
    },
    {
      url: "../img/operate/sumary_3.png",
      title: "Revision de recursos empleados."
    },
    {
      url: "../img/operate/sumary_4.png",
      title: "Escalabilidad"
    }
  ],
  examples: [{
    title: "Monitoreo de instancias EC2",
    url:"../img/operate/ex1.png"    
  },{
    title: "Monitoreo de performance",
    url:"../img/operate/ex2.png"    
  },{
    title: "Azure request",
    url:"../img/operate/ex3.png"    
  },{
    title: "Google request",
    url:"../img/operate/ex4.PNG"    
  }],
  links: [
    {
      title: "Monitoreo de infraestructuras",
      url: "https://www.itdo.com/blog/monitoreo-de-infraestructuras/"
    },{
      title: "Escalabilidad Horizontal y Vertical",
      url: "https://www.oscarblancarteblog.com/2017/03/07/escalabilidad-horizontal-y-vertical/"
    }
  ],
  resources: [
    {
      title: "Cloud Analitics",
      url: "https://marketingplatform.google.com/about/analytics/"
    },{
      title: "AWS Pricing Calculator",
      url: "https://calculator.aws/#/addService"
    },{
      title: "Nagios",
      url: "https://www.nagios.org/"
    },{
      title: "MRTG network monitor",
      url: "https://www.paessler.com/info/mrtg_for_windows?gclid=CjwKCAjw2dD7BRASEiwAWCtCb0AR2EFVSyY0GNBnyWBSyB7-kmyD7be1_px8bFPiY4AEiYKL3zjNKRoCcuMQAvD_BwE"
    },{
      title: "Op Manager Network",
      url: "https://www.manageengine.com/latam/network-monitoring/"
    }
  ]
};

const monitor = {
  summary: {
    content: `
    <div class="data-sumary">
      <h2 class="title">Monitoring</h2>
      <img src="../img/monitor/summary.png" style="  display: block;
        margin-left: auto;
        margin-right: auto;
        width: 25%;">
      <p class="summary">
      Una vez tenemos una versión del software funcional, se ha de realizar un seguimiento. En primer lugar, hay que monitorear el performance de la aplicación y del servidor, realizando una lectura de parámetros de forma automatizada para detectar fallos.
      </p>
      <p>                
      Aquí estableceremos qué parámetros de nuestra aplicación vamos a vigilar. Toda la información recogida a lo largo de un periodo de tiempo nos permite realizar ajustes que se reflejarán en la siguiente fase de planificación.
      </p>
    </div>
    `
  },
  summary_images: [
    {
      url: "../img/monitor/summary_1.gif",
      title: "Revision de logs de errores y moniotoreo de rendimiento."
    },
    {
      url: "../img/monitor/summary_2.gif",
      title: "metricas de rendimiento de dispositivos y comportamiento"
    },
    {
      url: "../img/monitor/summary_3.jpg",
      title: "Verificacion de funcionalidad y salud de las aplicaciones"
    },
    {
      url: "../img/monitor/summary_4.jpg",
      title: "Revision de estado de rendimiento"
    }
  ],
  examples: [{
    title: "Peticiones dentro de la aplicacion.",
    url:"../img/monitor/ex1.PNG"    
  },{
    title: "Tickets de servicio en la aplicacion.",
    url:"../img/monitor/ex2.PNG"    
  },{
    title: "Monitoreo de rendimiento en uso de app.",
    url:"../img/monitor/ex3.PNG"    
  },{
    title: "Log de errores dentro de la app.",
    url:"../img/monitor/ex4.PNG"    
  }],
  links: [
    {
      title: "Monitoring Software",
      url: "https://www.applicationperformancemanagement.org/software/monitoring-software/"
    },{
      title: "Application Performance Management(APM)",
      url: "https://www.ireo.com/noticias/it-service-management/que-es-application-performance-management-apm"
    },
    {
      title: "Definición de BPM y RUM",
      url: "https://softwaresupport.softwaregrp.com/doc/KM01234679?fileName=hp_man_BSM_925_RUM_Getting_Started_BP_pdf.pdf"
    },{
      title: "6 Steps APM",
      url: "https://blog.appoptics.com/6-steps-to-get-started-with-application-performance-monitoring-apm/"
    }
  ],
  resources: [
    {
      title: "Manageengine Manager",
      url: "https://www.manageengine.com/products/applications_manager/"
    },{
      title: "Raygun",
      url: "https://www.manageengine.com/products/applications_manager/"
    },{
      title: "Stackify",
      url: "https://stackify.com/why-stackify/"
    },{
      title: "Pingdom",
      url: "https://www.pingdom.com/"
    },{
      title: "Datadog",
      url: "https://www.datadoghq.com/"
    },{
      title: "AppDynamics",
      url: "https://www.appdynamics.com/"
    }
  ]
};

const devops = {
  summary: {
    content: `
    <div class="data-sumary">
      <h2 class="title">Devops</h2>
      <img src="../img/devops/summary.png" style="  display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;">
      <p class="summary">
      Realmente se trata de un cambio de cultura que fomenta la colaboración entre áreas tradicionalmente contrapuestas, como son desarrollo (Dev) y operaciones (Ops), además de aseguramiento de la calidad (QA), permitiendo desarrollar software de forma más rápida, más eficiente y por consiguiente con mayor calidad y a un coste inferior.
      </p>
      <p>                
      Este proceso ayuda a todos en toda la cadena, ya que los entornos y procesos están estandarizados. Todas las acciones de la cadena están automatizadas. También da libertad a todas las partes interesadas para que concentren sus esfuerzos en diseñar y codificar un entregable de alta calidad en lugar de preocuparse por los diversos procesos de construcción, operaciones y control de calidad.
      </p>
    </div>
    `
  },
  summary_images: [
    {
      url: "../img/devops/summary_1.jpg",
      title: "Principios de devops"
    },{
      url: "../img/devops/summary_2.png",
      title: "Retroespectivas, aprendizaje continuo."
    },{
      url: "../img/devops/summary_3.png",
      title: "Tratar con las brechas de comunicacion."
    }
  ],
  examples: [{
    title: "",
    url:"../img/devops/ex1.png"    
  }],
  links: [
    {
      title: "Devopsdays",
      url: "https://devopsdays.org/blog"
    },{
      title: "Entre dev y ops",
      url: "https://www.entredevyops.es/"
    },{
      title: "Atlassian DevOps",
      url: "https://www.atlassian.com/solutions/devops"
    },{
      title: "Devops group",
      url: "https://www.devopsgroup.com/blog/"
    },{
      title: "devops.com",
      url: "https://devops.com/"
    }
  ],
  resources: [
    {
      title: "Stack Share",
      url: "https://stackshare.io/"
    },{
      title: "Amazon devops",
      url: "https://aws.amazon.com/es/devops/what-is-devops/"
    },{
      title: "Softwaretesting help",
      url: "https://www.softwaretestinghelp.com/top-20-automation-testing-tools/"
    },{
      title: "SAFe® DevOps",
      url: "https://www.scaledagile.com/devops/"
    },{
      title: "Guru99",
      url: "https://www.guru99.com/"
    },{
      title: "Channel9",
      url: "https://channel9.msdn.com/"
    }
  ]
};

export default { plan, code, build, test, release, deploy, operate, monitor, devops };