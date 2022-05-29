/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*************************************/
                
                
				Id: 0,
				Name: "María Francesca Caldentey Oliver",
				Photo: "mariona.jpg",
				Quote: "Nunca te rindas",
				Age: 26,
				Occupation: "Futbolista profesional",
				Family: "Soltera",
				Location: "Barcelona",
				Character: "Le gusta disfrutar del buen ambiente",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Recuperarse de su lesión que le ha tenido alejada de los terrenos de juego", "Ganar todos los titulos, todos los años"],
				Frustrations: ["No poder jugar le esta lastrando mucho", "Le fastidia, no poder hacer todo ella, y depender de los demas"],
				Bio: "Vive, para y por el futbol, ya gano el año pasado el triplete, y esta temporada su lesion le ha impedido ayudar a sus compañeras a la conquista de otra hazaña igual, su entorno familiar le apoya mucho, y es una entusiasta de las actividades del aire libre",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos: "Necesita unos dias para desconectar de todo la tension y trabajado de su rehabilitación por eso ha ido a Granada",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 3 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{		
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Rodolfo Castellanos de Oliveira",
				Photo: "rodolfo.jpeg",
				Quote: "Siempre hay que estar en el sitio mas alto, y nunca bajar de este",
				Age: 66,
				Occupation: "Retirado",
				Family: "Ha perdido el contacto con la poca familia que tenia",
				Location: "Malaga",
				Character: "Mentalidad ganadora, nunca se rinde, y sabio",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Quiere aspirar a terminar su vida habiendo aprendido todo lo que pueda asimilar.", "Le gustaria asistir a todas las ferias del libro que pueda"],
				Frustrations: ["No tiene demasiado dinero para recorrerse todo el pais.", "Por eso intenta abaratar todo lo que pueda su estancia"],
				Bio: "Alejado de su familia tradicional, vive en una aventura de recorrer todas las ferias del libro que el pueda, para aprender aun más, es muy academico, y quiere aprender todo lo que este en su mano, tiene sus amigos de confianza pero no mucho mas que eso.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Mobile", Value: 2 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos:   "Quiere desplazarse por España de la manera más economica posible." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 4 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
