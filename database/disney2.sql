-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: disney_world
-- ------------------------------------------------------
-- Server version	8.0.30-0ubuntu0.22.04.1


CREATE DATABASE disney_world;
USE disney_world;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `app_users`
--

DROP TABLE IF EXISTS `app_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `app_users` (
  `id_users` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(350) NOT NULL,
  PRIMARY KEY (`id_users`),
  UNIQUE KEY `id_UNIQUE` (`id_users`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_users`
--

LOCK TABLES `app_users` WRITE;
/*!40000 ALTER TABLE `app_users` DISABLE KEYS */;
INSERT INTO `app_users` VALUES (5,'blas','$2a$10$XnUF7SphwycQJkJCOH64f.Mq6lRRVdrC8xivHzRjjWha0dwZSd03m','blas@a.com'),(18,'blas123','$2a$10$o2VnxIrjyk9LKZdS5fFPROU6nVKocqbepbEtG8IE03RgFKVzFhARi','blasdelgado848@gmail.com'),(19,'Example23','$2a$10$T3BNG9P6gvI4NqbaGDuwJO2MdvfJp/jsFirpwU3J5xyiw8vJlovOO','blasdelgado10@gmail.com');
/*!40000 ALTER TABLE `app_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `characters`
--

DROP TABLE IF EXISTS `characters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `characters` (
  `id_characters` int NOT NULL AUTO_INCREMENT,
  `image_url` tinytext NOT NULL,
  `name` varchar(45) NOT NULL,
  `age` int NOT NULL,
  `weight` decimal(10,0) NOT NULL,
  `history` mediumtext NOT NULL,
  PRIMARY KEY (`id_characters`),
  UNIQUE KEY `id_UNIQUE` (`id_characters`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `characters`
--

LOCK TABLES `characters` WRITE;
/*!40000 ALTER TABLE `characters` DISABLE KEYS */;
INSERT INTO `characters` VALUES (1,'imagesexampleee.com/1','Natasha Romanoff',38,58,'Nacida en Rusia, Natasha Romanoff fue entrenada como esp??a en una academia secreta conocida como la \'Habitaci??n Roja\' que inclu??a entrenamiento como bailarina de ballet,62??? all?? ella es esterilizada al igual que todos los dem??s estudiantes.63??? Creci?? en una familia falsa con Alexei Shostakov y Melina Vostokoff como sus \'padres\' y Yelena Belova como su \'hermana\' menor.  En 1995, cuando Shostakov completa su misi??n asignada de robar informaci??n de SHIELD en Ohio, la familia escapa a Cuba donde se encuentran con su jefe, el general Dreykov, quien hace que Romanoff y Belova pasen por la Habitaci??n Roja para recibir entrenamiento adicional y convertirse en asesinas. Posteriormente Clint Barton es enviado a matar a Romanoff, pero en su lugar opta por salvarle la vida y reclutarla para S.H.I.E.L.D. permitiendo a Romanoff escapar de su vida anterior como asesina. En una misi??n en Budapest, con la ayuda de Barton, Romanoff instala una bomba en un intento de matar a Dreykov, pero aparentemente matando a su hija Antonia en el proceso. En 2009, Romanoff fue enviada en una misi??n a Odessa para proteger a un cient??fico, pero fue confrontado por el Soldado del Invierno. Romanoff intent?? cubrir al cient??fico, pero el Soldado del Invierno lo mat?? dispar??ndole atravesando su est??mago. .'),(2,'imagenexample.com/1','Tony Stark',52,102,'Tony Stark, es un multimillonario magnate empresarial y fil??ntropo estadounidense, playboy e ingenioso cient??fico, que sufri?? una grave lesi??n en el pecho durante un secuestro en el Medio Oriente. Cuando sus captores intentan forzarlo a construir un arma de destrucci??n masiva, pero en cambio, construy?? una armadura para salvar su vida y escapar del cautiverio. M??s tarde, Stark desarrolla su traje, agregando armas y otros dispositivos tecnol??gicos que dise???? a trav??s de su compa????a, Industrias Stark. ??l usa el traje y las versiones sucesivas para proteger al mundo como Iron Man. Aunque al principio ocult?? su verdadera identidad, Stark finalmente declar?? qui??n era en un anuncio p??blico. '),(3,'imagesexampleee.com/1','Steven Grant Rogers',38,109,'El Capit??n Am??rica viste un traje que lleva un motivo de la bandera de los Estados Unidos, y utiliza un escudo casi indestructible que lanza como proyectil. El personaje es representado como el ??lter ego de Steve Rogers, un joven fr??gil mejorado a la cima de la perfecci??n humana por un suero experimental S.S.S. (Suero supersoldado) para ayudar a los esfuerzos inminentes del gobierno de Estados Unidos en la Segunda Guerra Mundial. Cerca del final de la guerra, queda atrapado en el hielo y sobrevive en animaci??n suspendida hasta que es descongelado en el presente. A pesar de que el Capit??n Am??rica a menudo lucha por mantener sus ideales como un hombre fuera de su tiempo con sus realidades modernas, sigue siendo una figura muy respetada en su comunidad, hasta convertirse en el l??der de Los Vengadores.'),(6,'imageurl.com/1','Thor Odinson',24,98,'El padre de Thor, Od??n, decide que su hijo necesita que le ense??e la humildad y, en consecuencia, coloca a Thor (sin recuerdos de la divinidad) en el cuerpo y los recuerdos de un estudiante de medicina humana existente, parcialmente discapacitado, Donald Blake.Despu??s de convertirse en m??dico y de vacaciones en Noruega, Blake presencia la llegada de una partida de exploraci??n alien??gena. Blake huye de los extraterrestres a una cueva. Despu??s de descubrir el martillo de Thor, Mjolnir (disfrazado como un bast??n) y golpearlo contra una roca, se transforma en el dios del trueno.M??s tarde, en Thor# 159, se revela que Blake siempre ha sido Thor, el hechizo de Odin lo ha llevado a olvidar su historia como El Dios del Trueno y creerse mortal '),(7,'imageurl.com/2','Stephen Strange',36,81,'Despu??s de convertirse en uno de los alumnos del Hechicero Supremo, se convierte en un practicante tanto de las artes m??sticas como de las artes marciales. Adem??s de conocer muchos hechizos poderosos, tiene un traje con dos objetos m??sticos: la Capa de Levitaci??n y el Ojo de Agamotto, que le otorgan poderes adicionales. Strange es ayudado en el camino por su amigo y sirviente llamado Wong, su aliado llamado el Bar??n Mordo y una gran variedad de objetos m??sticos. Toma residencia en una mansi??n llamada Sanctum Sanctorum, ubicada en la ciudad de Nueva York. M??s tarde, Strange toma el t??tulo de Hechicero Supremo. '),(8,'imageurl.com/3','Peter Parker',21,67,'Peter Benjamin Parker es un joven hu??rfano nativo de Forest Hills, Queens, en Nueva York, que vive con sus t??os May y Ben. Durante su etapa como estudiante de la ficticia Midtown High School, es mordido por una ara??a radiactiva en una exhibici??n cient??fica y ??adquiere la agilidad y la fuerza proporcional de un ar??cnido?? Adem??s de incrementar sus habilidades atl??ticas, a partir de ese momento Parker es capaz de adherirse a superficies. Gracias a sus conocimientos cient??ficos, desarrolla un dispositivo que le permite disparar telara??as a trav??s de peque??os cilindros montados en sus mu??ecas. Inicialmente usa sus poderes para volverse popular entre el p??blico televisivo, lo cual le lleva a dise??ar su propio disfraz y participar en una competici??n de lucha libre, sin embargo un d??a ??ignora alegremente la posibilidad de detener a un ladr??n que huye, su indiferencia ir??nicamente lo alcanza cuando el mismo delincuente m??s tarde asalta y mata a su t??o Ben??. Tras detener al asesino, Parker aprende la lecci??n de que ??un gran poder conlleva una gran responsabilidad??.'),(9,'imageurl.com/4','Thena',4000,73,'Thena naci?? en la ciudad de Olimpia en la antigua Grecia y, por lo tanto, es uno de los Eternos de Olimpia. Originalmente se llamaba Azura, pero su padre Zuras cambi?? su nombre por decreto real para parecerse al de la hija de Zeus, Atenea (nombre griego de Minerva), para sellar el tratado entre los dioses ol??mpicos y los eternos, en el que los eternos actuar??an como representantes de los dioses en la Tierra, con Thena como representante personal de Atenea. Debido a esto, a menudo se la ha confundido con Atenea y Minerva. La ciudad de Atenas aparentemente fue construida para ella, no para la diosa, aunque Thena m??s tarde permiti?? que fuera conquistada por los Espartanos en 404 a. C. '),(10,'imageurl.com/5','Starfox',1000,89,'Eros es un miembro de los Eternos, una rama gen??tica de la humanidad, que dej?? de espacio profundo de la Tierra hace a??os y se instal?? en la luna de Saturno de Tit??n. Eros es el hijo menor de A\'lars (tambi??n conocido como Mentor) y Sui-San, y creci?? en Tit??n para ser un mujeriego y aventurero despreocupado, amante de la diversi??n, en contraste con su hermano Thanos, un nihilista hambriento de poder y conquistador. Solo cuando Thanos lanz?? su primer ataque importante contra Tit??n, Eros comenz?? a tomar la vida un poco m??s en serio. '),(11,'imageurl.com/6','Caballero Negro',5000,86,'Dane Whitman naci?? en Gloucester, Massachusetts y es mejor conocido como el Caballero Negro actual, continuando un legado que comenz?? en la Inglaterra medieval. El primer Caballero Negro, el ancestro de Whitman, Sir Percy de Scandia, vivi?? durante el reinado del rey Arturo.El asesinato de Percy a manos de su n??mesis Modred ???comenz?? una cadena de sucesores, todos ellos descendientes de Percy.\nFue revivido por el t??o de Whitman, Nathan Garrett, que se convirti?? en el supervillano Caballero Negro .Despu??s de ser herido de muerte durante una batalla con Iron Man, escap?? a su finca, convoc?? a su sobrino para confesar sus cr??menes, y le pidi?? restaurar el honor de su herencia familiar y expiar las faltas de Garrett, d??ndole a Whitman las armas que us?? por crimen.'),(12,'imageurl.com/7','Nicky Fury',68,104,'Nicholas Joseph Fury era el mayor de los tres hijos de Jack Fury. Su padre era un ciudadano de los Estados Unidos que se alist?? en el Cuerpo Real de Vuelo del Reino Unido de Gran Breta??a e Irlanda durante la Primera Guerra Mundial. Este personaje de poca importancia en el Universo Marvel solo fue protagonista en el n??mero 76 de Sgt. Fury and his Howling Commands (marzo de 1970). De acuerdo con ese ejemplar, Jack se alist?? en el Cuerpo en 1916 y se qued?? estacionado en Francia durante la Tercera Rep??blica. Consigui?? derribar a Manfred von Richthofen al poco de comenzar su carrera a??rea y se convirti?? en un aviador muy condecorado al final de la guerra en 1918. '),(13,'imageurl.com/8','Bruce Banner',52,98,'Bruce Banner es un reconocido cient??fico con siete doctorados y experiencia en el campo de la radiaci??n gamma. En la Universidad de Culver en Virginia, el general Thunderbolt Ross se re??ne con ??l, quien adem??s es el colega y novio de su hija Betty, en relaci??n con un experimento que Ross afirma que pretende hacer que los humanos sean inmunes a la radiaci??n gamma. El experimento, es un programa de \'s??per soldado\' de la era de la Segunda Guerra Mundial que Ross espera recrear, pero falla y la exposici??n de radiaci??n gamma hace que Banner se transforme en Hulk por breves per??odos de tiempo, siempre que su frecuencia card??aca supere los 200. Hulk destruye el laboratorio hiere o mata a las personas que est??n dentro. Posteriormente Banner se convierte en un fugitivo del ej??rcito de los EE. UU. y de Ross en particular que quiere convertir el proceso de Hulk en un arma. '),(14,'imageurl.com/30','Leonhard Seppala',48,88,' Fue un criador, entrenador y musher de perros de trineo noruego-estadounidense que tuvo un papel crucial en la carrera del suero a Nome de 1925??? y particip?? en los Juegos Ol??mpicos de Lake Placid 1932. Seppala introdujo en Estados Unidos los perros de trabajo que empleaban los nativos siberianos, una raza que acabar??a siendo conocida como husky siberiano. El Premio Humanitario Leonhard Seppala honra la excelencia en el cuidado de perros de trineo'),(15,'imageurl.com/31','John Reid',45,98,' Cuando se sube a un tren para ir de nuevo a su casa en Colby, Texas, se topa con Toro. Al encontrarse ponen en marcha una serie de acontecimientos para convertirle en un h??roe enigm??tico enmascarado llamado el Llanero Solitario. En ese mismo momento, aparece Butch, quien le amenaza con dispararle, pero aparece Toro e inician una pelea en la que Butch sale corriendo, por lo que Toro y John se van a su b??squeda. '),(16,'imageurl.com/32','Coronel Bullard ',38,70,' Fue el primer piloto militar estadounidense afroamericano ,  Fue uno de los pocos pilotos de combate negros durante la Primera Guerra Mundial, junto con William Robinson Clarke, un jamaiquino que vol?? para el Royal Flying Corps, Domenico Mondelli de Italia y Ahmet Ali ??elikten del Imperio Otomano. Tambi??n fue m??sico de jazz y boxeador.'),(17,'imageurl.com/33','Pamela Travers',39,48,'  fue una escritora, actriz y periodista brit??nica, creadora de la famosa ni??era de ficci??n Mary Poppins en el libro del mismo nombre. En 1924 se mud?? a Inglaterra, donde escribi?? bajo el seud??nimo de P.L. Travers. En 1933, comenz?? a escribir su serie de novelas infantiles acerca de la m??stica y m??gica ni??era Mary Poppins'),(18,'imageurl.com/34','Stargirl Caraway',24,49,'Ella es una estudiante de secundaria que se hace amiga y luego comienza a salir con Leo Borlock . Tiene talento musical y muestra una actitud de esp??ritu libre ante la vida. A lo largo de la pel??cula, ella trata de ayudar a Leo a ser m??s abierto y expresivo mientras tambi??n tiene que lidiar con algunas de las consecuencias de sus acciones. '),(19,'imageurl.com/35','Edward Scissorhands',33,79,'Un joven solitario e ingenuo con tijeras en lugar de manos. Es encontrado por la vendedora de cosm??ticos Peg Boggs quien lo saca de su aislada mansi??n para llevarlo a su vecindad de colores pasteles tipo \'para??so suburbano\'. Edward intenta demostrar a cada uno en su vecindario que puede aceptar las cosas de la vida y ser feliz. Tambi??n ofrece una renovaci??n para la vecindad entera pues con el filo de navaja de sus manos puede hacer cosas como realizar esculturas podando las plantas. '),(20,'imageurl.com/36','Hazel Grace Lancaster',19,45,'es una adolescente que vive en los suburbios de Indian??polis, ella sufre de c??ncer de tiroides en etapa terminal que ha hecho met??stasis en sus pulmones. Creyendo que est?? deprimida, su madre Frannie (Laura Dern) le pide asistir a un grupo de apoyo semanal para pacientes con c??ncer para ayudarla a hacer amigos con personas que est??n pasando por lo mismo '),(21,'imageurl.com/37','Augustus Waters',21,73,'Es un encantador adolescente que perdi?? una pierna por un c??ncer de hueso pero desde entonces aparentemente no ha tenido c??ncer.');
/*!40000 ALTER TABLE `characters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id_movies` int NOT NULL AUTO_INCREMENT,
  `image_url` tinytext NOT NULL,
  `title` varchar(100) NOT NULL,
  `creation_date` date NOT NULL,
  `rating` float NOT NULL,
  `genre` int NOT NULL,
  PRIMARY KEY (`id_movies`),
  UNIQUE KEY `id_UNIQUE` (`id_movies`),
  UNIQUE KEY `title_UNIQUE` (`title`),
  KEY `fk_genre_idx` (`genre`),
  CONSTRAINT `fk_genre` FOREIGN KEY (`genre`) REFERENCES `movies_genres` (`id_genre`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'urlimage.com','Black Widow','2021-06-29',4.1,1),(2,'imageexample.com/4','Thor : Amor y trueno','2022-06-07',3.5,1),(3,'imageexample.com/5','Eternals','2021-10-18',3.4,1),(4,'imageexample.com/6','Doctor Strange: En el multiverso de la locura','2022-05-06',4,1),(5,'imageexample.com/7','El Hombre Ara??a 2','2004-06-01',4,1),(6,'imageexample.com/8','Thor','2011-04-28',3.7,1),(7,'imageexample.com/9','Doctor Strange : Hechicero Supremo','2016-10-20',3,1),(8,'imageexample.com/10','El Hombre Ara??a ','2002-05-15',4.2,1),(9,'imageexample.com/11','Capit??n Am??rica y el soldad del invierno','2014-04-03',4.2,1),(10,'imageexample.com/12','Capit??n Am??rica: el primer vengador','2011-07-28',3.8,1),(11,'imageexample.com/13','Capit??n Am??rica: Civil War','2016-05-05',4.3,1),(12,'imageexample.com/14','Iron Man: El Hombre de hierro','2008-04-30',4.3,1),(13,'imageexample.com/15','Iron Man 2','2010-04-29',3.9,1),(14,'imageexample.com/16','Iron Man 3 ','2013-04-25',3.7,1),(15,'imageexample.com/17','Doctor Strange','2007-08-14',3,1),(16,'imageexample.com/18','El hombre ara??a 3','2007-05-03',3.7,1),(17,'imageexample.com/19','The Avengers','2012-04-26',4.3,1),(18,'imageexample.com/20','The Avengers: Era de Ultr??n','2015-04-23',4.1,1),(19,'imageexample.com/21','The Avengers: Infinity War','2018-04-25',4.5,1),(20,'imageexample.com/22','The Avengers: Endgame','2019-04-26',4.7,1),(21,'imageexample.com/23','Thor: El mundo oscuro','2013-10-22',3.8,1),(22,'imageexample.com/24','Thor: Ragnarok','2017-11-03',3.5,1),(72,'imageexpample.com/25','Togo','2019-12-20',4,2),(73,'imageexpample.com/26','El Llanero Solitario','2013-06-03',3.3,2),(74,'imageexpample.com/27','Escuadr??n rojo ','2012-04-05',3.8,2),(75,'imageexpample.com/28','El Sue??o de Mr Banks ','2014-01-23',3,2),(76,'imageexpample.com/29','Stargirl','2020-03-13',3.1,3),(77,'imageexpample.com/30','El Joven manos de tijera','1990-04-05',4.2,3),(78,'imageexpample.com/31','Bajo la misma estrella','2014-06-29',3.9,3);
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_characters`
--

DROP TABLE IF EXISTS `movies_characters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies_characters` (
  `id_movies_characters` int NOT NULL AUTO_INCREMENT,
  `characters` int NOT NULL,
  `movies` int NOT NULL,
  PRIMARY KEY (`id_movies_characters`),
  KEY `fk_characters_idx` (`characters`),
  KEY `fk_movies_idx` (`movies`),
  CONSTRAINT `fk_characters` FOREIGN KEY (`characters`) REFERENCES `characters` (`id_characters`),
  CONSTRAINT `fk_movies` FOREIGN KEY (`movies`) REFERENCES `movies` (`id_movies`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_characters`
--

LOCK TABLES `movies_characters` WRITE;
/*!40000 ALTER TABLE `movies_characters` DISABLE KEYS */;
INSERT INTO `movies_characters` VALUES (1,1,1),(2,2,12),(3,2,13),(4,2,14),(5,2,17),(6,2,18),(7,2,19),(8,2,20),(9,2,11),(10,3,11),(11,3,9),(12,3,10),(13,3,17),(14,3,18),(15,3,19),(16,3,20),(17,1,17),(18,1,18),(19,1,19),(20,1,20),(21,6,17),(22,6,18),(23,6,19),(24,6,20),(25,6,6),(26,6,21),(27,6,22),(28,7,4),(29,7,7),(30,7,15),(31,8,5),(32,8,8),(33,8,16),(34,9,3),(35,10,3),(36,11,3),(37,12,13),(38,12,14),(39,12,6),(40,12,10),(41,12,17),(42,12,18),(43,12,19),(44,12,20),(45,13,17),(46,13,18),(47,13,19),(48,13,20),(49,14,72),(50,15,73),(51,16,74),(52,17,75),(53,18,76),(54,19,77),(55,20,78),(56,21,78),(57,6,2);
/*!40000 ALTER TABLE `movies_characters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_genres`
--

DROP TABLE IF EXISTS `movies_genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies_genres` (
  `id_genre` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `image_url` tinytext NOT NULL,
  PRIMARY KEY (`id_genre`),
  UNIQUE KEY `id_UNIQUE` (`id_genre`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_genres`
--

LOCK TABLES `movies_genres` WRITE;
/*!40000 ALTER TABLE `movies_genres` DISABLE KEYS */;
INSERT INTO `movies_genres` VALUES (1,'Pelicula De superh??roes','imagenurl.com'),(2,'Drama','imagenurl.com/1'),(3,'Romance','imageurl.com/2');
/*!40000 ALTER TABLE `movies_genres` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-15  3:28:30
