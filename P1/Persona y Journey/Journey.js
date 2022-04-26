/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "María Francesca Caldentey Oliver",
                Photo: "mariona.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere irse a Granada unos dias, para descansar del proceso de rehabilitacion de su lesion, y desconectar.",
                touch1: "agenda",
                feel1: "4",
                con1: "Mira exactamente que dias tienen que ser para no interrumpir demasiado con su proceso rehabilitativo",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Se dirige a buscar un hostel dado que tampoco se quiere gastar demasiado dinero en este",
                touch2: "Ordenador",
                feel2: "2",
                con2: "En principio no sabe por donde buscar demasiado, asi que no encuentra nada '",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide preguntar a sus amiga Raquel Morcillo jugadora del Granada femenino para ver que hostel le recomienda",
                touch3: "móvil (whatsapp)",
                feel3: "3",
                con3: "Tarda en contestarle un buen rato",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Raquel Morcillo le contesta, y le dice que hay sitios que ha estado comiendo o estando de fiesta, que tambien son hosteles y se lo pasan",
                touch4: "ordenador",
                feel4: "4",
                con4: "Al principio le cuesta encontrar los sitios, por que no le pidio la pagina web a su amiga",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Evalua los pros y contras de cada uno de estos sitios",
                touch5: "ordenador",
                feel5: "4",
                con5: "Cada vez que reflexiona sobre cada uno, tiene mas dudas, pero no pasa nada, ahora tiene tiempo",
                ima5: "cartoon-PCtyping.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Finalmente se decide, el Lemon Rock dado que es un lugar de ocio y le ha gustado la impresion que le ha dejado la pagina web",
                touch6: "ordenador",
                feel6: "5",
                con6: "Reserva, le avisa a Raquel donde ha reservado, y quedan para hacer actividades juntas, dentro y fuera del Lemon Rock",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Rodolfo Castellanos de Oliveira",
                Photo: "rodolfo.jpeg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Se ha enterado que hay una feria del libro en Granada, mira que dias cae, para preparar el viaje",
                touch1: "agenda",
                feel1: "5",
                con1: "Confirma que no tiene ningun compromiso ni cita medica esos dias",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Confirma que se va y acto seguido pasa a mirar la zona de Granada por donde esta la feria del libro, es por la zona de la Plaza de las Batallas",
                touch2: "Ordenador",
                feel2: "4",
                con2: "Piensa cual es su limite de presupuesto total, cuanto estaria dispuesto a gastarse en la estancia, y cuando en el alojamiendo",
                ima2: "cartoon-thinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Tras ver que no quiere gastarse demasiado dinero como es habitual, decide buscar hosteles",
                touch3: "Ordenador",
                feel3: "2",
                con3: "No encuentra que haya en Granada la misma cadena que suele hospedarse",
                ima3: "cartoon-PCangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Tras buscar tal y como le enseño su amigo Jarcinto, encuentra varios sitios en Granada",
                touch4: "Ordenador",
                feel4: "3",
                con4: "Ve que la mayoria de sitios estan lejos de Granada la Plaza de las Batallas, asi que eligira en funcion a cual le guste más",
                ima4: "cartoon-PChard.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reflexiona pros y contras de cada uno, precio, lugar, y sitio",
                touch5: "Ordenador",
                feel5: "4",
                con5: "ESta indeciso entre el mas barato, el que mejor esta amueblado, y quien tiene mejores vistas",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Reserva en el de que mejor esta amueblado, no es mucho más caro que el Lemon Rock que era el más barato por la zona en la que esta, y el de mejores vistas era demasiado caro para el.",
                touch6: "Ordenador (reserva OK)",
                feel6: "5",
                con6: "Se empieza informar que autores van a ir a la feria para saber que libros leerse hasta la fecha, para poderle preguntarle en el meet and greet.",
                ima6: "cartoon-PChappy.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



