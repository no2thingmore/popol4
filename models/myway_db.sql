CREATE DATABASE  IF NOT EXISTS `myway` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `myway`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: myway
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '식별자 ID (기본키)',
  `email` varchar(255) NOT NULL COMMENT '이메일',
  `password` varchar(255) NOT NULL COMMENT '비밀번호',
  `name` varchar(100) NOT NULL COMMENT '이름',
  `contact_number` varchar(50) NOT NULL COMMENT '연락처',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `contact_number` (`contact_number`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'qwe123@gmail.com','qwe123','조경익','01012345678','2023-12-14 00:00:00','2023-12-14 00:00:00');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board`
--

DROP TABLE IF EXISTS `board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '식별자 ID (기본키)',
  `admin_id` int NOT NULL COMMENT '수정/추가 한 관리자 이름',
  `title` varchar(255) NOT NULL COMMENT '제목',
  `content` varchar(255) DEFAULT NULL COMMENT '내용',
  `image_url` varchar(255) NOT NULL COMMENT '이미지 주소',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL COMMENT '업데이트 시간',
  PRIMARY KEY (`id`),
  KEY `admin_id` (`admin_id`),
  CONSTRAINT `board_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board`
--

LOCK TABLES `board` WRITE;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` VALUES (1,1,'써브웨이와 함께하는 JTBC 수목드라마 \'이 연애는 불가항력\'','써브웨이와 함께하는 JTBC 수목드라마 \'이 연애는 불가항력\' 많은 시청 부탁 드립니다.','800_상세_20230829025521837.jpg','2023-12-15 00:00:00','2023-12-15 00:00:00'),(6,1,'asd','asd','파란댕댕이 악기.png','2023-12-28 06:19:56','2023-12-28 06:19:56');
/*!40000 ALTER TABLE `board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '식별자 ID (기본키)',
  `admin_id` int NOT NULL COMMENT '수정/추가 한 관리자 이름',
  `title` varchar(255) NOT NULL COMMENT '게시판 제목',
  `content` text COMMENT '본문 내용',
  `image_url` varchar(255) DEFAULT NULL COMMENT '이미지가 필요한 경우 경로 작성',
  `status` char(1) NOT NULL COMMENT '0:진행중, 1:종료',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `admin_id` (`admin_id`),
  CONSTRAINT `event_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (14,1,'랍스터 컬렉션','신선한 리얼 랍스터가 그대로! 올겨울 한정판으로 더욱 특별하게 준비한 써브웨이 랍스터 컬렉션','event_lobster_collection.png','0','2023-12-15 06:26:06','2023-12-15 06:26:06'),(15,1,'써브웨이 오늘의 수프','오늘의 수프를 원하는 사이즈로! 샌드위치랑 함께 먹으면 든든하고 맛있썹!','event_subway_today_soup.png','0','2023-12-15 06:26:06','2023-12-15 06:26:06'),(16,1,'Eat Fresh Fell Good','써브웨이 X 차은우 신선함 가득! 즐거움 가득! 함께하는 이 순간이 즐거워!','event_eat_fresh_feel_good.png','0','2023-12-15 06:26:06','2023-12-15 06:26:06'),(17,1,'2023 슈퍼팝 프로모션','이벤트가 종료되었습니다.','event_2023_super_pop.png','1','2023-12-15 06:26:06','2023-12-15 06:26:06'),(18,1,'말이 안 나올 땐 손으로 주문하자!','말이 안 나올 땐? 손으로 주문하자!','event_order_by_hand.png','0','2023-12-15 06:26:06','2023-12-26 14:40:52'),(19,1,'스파이시 시리즈','이벤트가 종료되었습니다.','event_spicy_series.png','1','2023-12-15 06:26:06','2023-12-26 14:40:48'),(20,1,'차은우 메뉴 프로모션','이벤트가 종료되었습니다.','event_cha_eunwoo_menu_promotion.png','1','2023-12-15 06:26:06','2023-12-15 06:26:06'),(21,1,'카도 썸머 슬리퍼 & 비치팩','이벤트가 종료되었습니다.','event_caddo_summer_slipper_beach pack.png','1','2023-12-15 06:26:06','2023-12-15 06:26:06'),(22,1,'New 쉬림프 시리즈','이벤트가 종료되었습니다.','event_new_shrimp_series.png','1','2023-12-15 06:26:06','2023-12-15 06:26:06'),(23,1,'WaterBomB! Seoul','이벤트가 종료되었습니다.','event_waterbomb_seoul.png','1','2023-12-15 06:26:06','2023-12-15 06:26:06'),(24,1,'트러플 마요 시리즈','이벤트가 종료되었습니다.','event_truffle_mayo_series.png','1','2023-12-15 06:26:06','2023-12-15 06:26:06'),(25,1,'이달의 썹!프라이즈','이벤트가 종료되었습니다.','event_mon_surprise.png','1','2023-12-15 06:26:06','2023-12-15 06:26:06'),(26,1,'치킨 컬렉션','이벤트가 종료되었습니다.','event_chicken_collection.png','1','2023-12-15 06:26:06','2023-12-15 06:26:06');
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faq`
--

DROP TABLE IF EXISTS `faq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faq` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '식별자 ID (기본키)',
  `admin_id` int NOT NULL COMMENT '수정/추가 한 관리자 이름',
  `kinds` char(1) NOT NULL COMMENT '0:1:1문의, 1:가맹점문의 ',
  `tags` char(1) NOT NULL COMMENT '0:기타,1:사이트이용,2:포인트,3:제품,4:매장이용',
  `title` varchar(255) NOT NULL COMMENT 'FAQ 제목',
  `content` text COMMENT 'FAQ 내용',
  `comment` text COMMENT '답변 내용',
  `add_file` varchar(255) DEFAULT NULL COMMENT '이미지가 필요한 경우 경로 작성',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `admin_id` (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faq`
--

LOCK TABLES `faq` WRITE;
/*!40000 ALTER TABLE `faq` DISABLE KEYS */;
INSERT INTO `faq` VALUES (1,1,'0','3','3번 FAQ입니다','내용입니다ㅇ',NULL,NULL,'2023-12-21 00:00:00','2023-12-27 00:32:09'),(2,1,'1','1','가맹점FAQ입니다','내용입니다.ㅁㄴㅇㅁㄴㅇㅁ',NULL,NULL,'2023-12-21 00:00:00','2023-12-26 13:31:32');
/*!40000 ALTER TABLE `faq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '식별자 ID (기본키)',
  `admin_id` int NOT NULL COMMENT '수정/추가 한 관리자 이름',
  `kname` varchar(255) NOT NULL COMMENT '한글이름',
  `ename` varchar(255) NOT NULL COMMENT '영어이름',
  `image_url` varchar(255) NOT NULL COMMENT '이미지 경로',
  `coment` varchar(255) NOT NULL COMMENT '음식 설명',
  `ingred_kcal` float DEFAULT NULL COMMENT '칼로리',
  `ingred_gram` float DEFAULT NULL COMMENT '그램',
  `ingred_protein` float DEFAULT NULL COMMENT '단백질',
  `ingred_fat` float DEFAULT NULL COMMENT '지방',
  `ingred_sugars` float DEFAULT NULL COMMENT '당도',
  `ingred_salt` float DEFAULT NULL COMMENT '염도',
  `price` int NOT NULL COMMENT '가격',
  `tags` int NOT NULL COMMENT '카테고리 0:인기메뉴, 1:아침메뉴, 2:추천메뉴 등등',
  `kinds` int NOT NULL COMMENT '0:샌드위치 ,1:랩/기타 ,2:샐러드 ,3:사이드',
  `status` int NOT NULL COMMENT '0:출시,1:품절,2:판매종료',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `admin_id` (`admin_id`),
  CONSTRAINT `food_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (27,1,'에그마요','Egg Mayo','에그마요.png','부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러',416,238,16.4,4.8,7.7,554,11000,0,0,0,'2023-12-26 02:13:22','2023-12-26 02:13:22'),(28,1,'이탈리안 비엠티','Italian B.M.T.™ ','이탈리안 비엠티.png','페퍼로니, 살라미 그리고 햄이 만들어내는 최상의 조화! 전세계가 사랑하는 써브웨이의 베스트셀러! Biggest Meatiest Tastiest, its’ B.M.T.',388,228,21,5.9,8.6,11064,12000,0,0,0,'2023-12-26 02:14:39','2023-12-26 06:15:45'),(29,1,'비엘티','B.L.T. ','비엘티.png','오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그대로~',300,182,15.9,3.7,7.9,666,13000,0,0,0,'2023-12-26 02:15:37','2023-12-26 02:15:37'),(30,1,'햄','Ham','햄.png','풍부한 햄이 만들어내는 담백함을 입 안 가득 즐겨보세요!',262,220,19,1,8.4,680,14000,0,0,0,'2023-12-26 02:16:38','2023-12-26 02:16:38'),(31,1,'참치','Tuna','참치.png','남녀노소 누구나 좋아하는 담백한 참치와 고소한 마요네즈의 완벽한 조화',316,238,26.9,1.4,7.6,535,15000,0,0,0,'2023-12-26 02:17:40','2023-12-26 02:17:40'),(32,1,'치킨 슬라이스','Chicken Slice','치킨 슬라이스.png','닭가슴살로 만든 치킨 슬라이스로 즐기는 담백한 맛!',265,221,18.6,0.9,8.7,751,16000,1,0,0,'2023-12-26 02:18:58','2023-12-26 02:18:58'),(33,1,'치킨 베이컨 아보카도','Chicken Bacon Avocado','치킨 베이컨 아보카도.png','담백하게 닭가슴살로 만든 치킨 슬라이스와 베이컨, 부드러운 아보카도의 만남',355,246,20.2,3.2,9,940,17000,1,0,0,'2023-12-26 02:19:53','2023-12-26 02:19:53'),(34,1,'로스트 치킨','Roasted Chicken','로스트 치킨.png','오븐에 구워 담백한 저칼로리 닭가슴살의 건강한 풍미',300,237,26.4,1.3,8.7,605,18000,1,0,0,'2023-12-26 02:20:44','2023-12-26 02:20:44'),(35,1,'로티세리 바비큐 치킨','Rotisserie Barbecue Chicken','로티세리 바비큐 치킨.png','촉촉한 바비큐 치킨의 풍미가득. 손으로 찢어 더욱 부드러운 치킨의 혁명',327,249,29.1,2.5,7.8,542,19000,1,0,0,'2023-12-26 02:21:58','2023-12-26 02:21:58'),(36,1,'써브웨이 클럽','Subway Club™','써브웨이 클럽.png','고소한 베이컨, 담백한 치킨 슬라이스에 햄까지 더해 완벽해진 조화를 즐겨보세요!',299,216,19.8,2.4,8.53,853,20000,1,0,0,'2023-12-26 02:22:49','2023-12-26 02:22:49'),(37,1,'베지','Veggie Delite','베지.png','갓 구운 빵과 신선한 8가지 야채로 즐기는 깔끔한 한끼',209,164,9.2,0.6,7.6,262,21000,1,0,0,'2023-12-26 02:23:42','2023-12-26 02:23:42'),(38,1,'스파이시 쉬림프','Spicy Shrimp','스파이시 쉬림프.png','탱글한 쉬림프에 이국적인 시즈닝을 더해 색다른 매콤함을 만나보세요!',245,213,16.5,0.9,9.1,570,22000,2,0,0,'2023-12-26 02:24:53','2023-12-26 02:24:53'),(39,1,'쉬림프','Shrimp','쉬림프.png','탱글한 쉬림프 5마리가 그대로, 신선하고 담백한 쉬림프의 맛 그대로 즐겨보세요!',241,209,16.3,0.6,7.9,415,23000,2,0,0,'2023-12-26 02:25:42','2023-12-26 02:25:42'),(40,1,'K-바비큐','K-BBQ','k-바비큐.png','써브웨이의 코리안 스타일 샌드위치! 마늘, 간장 그리고 은은한 불맛까지!',327,256,25.6,2.1,14.7,899,24000,2,0,0,'2023-12-26 02:26:38','2023-12-26 02:26:38'),(41,1,'풀드 포크 바비큐','Pulled Pork Barbecue','풀드 포크 바비큐.png','미국 스타일의 풀드 포크 바비큐가 가득 들어간 샌드위치',327,235,24.8,2.1,7.8,689,25000,2,0,0,'2023-12-26 02:27:38','2023-12-26 02:27:38'),(42,1,'스테이크 & 치즈','Steak & Cheese','스테이크&치즈.png','육즙이 쫙~풍부한 비프 스테이크의 풍미가 입안 한가득',355,245,28.1,4.2,8.8,780,26000,2,0,0,'2023-12-26 02:28:29','2023-12-26 02:28:29'),(43,1,'스파이시 이탈리안','Spicy Italian','스파이시 이탈리안.png','페퍼로니 & 살라미가 입안 가득, 페퍼로니의 부드러운 매콤함을 만나보세요!',464,224,20.7,9.1,8.7,1250,27000,2,0,0,'2023-12-26 02:29:26','2023-12-26 02:29:26'),(44,1,'치킨 데리야끼','Chicken Teriyak','치킨 데리야끼.png','담백한 치킨 스트립에 달콤짭쪼름한 써브웨이 특제 데리야끼 소스와의 환상적인 만남',341,255,26.5,1.2,10.1,698,28000,2,0,0,'2023-12-26 02:30:37','2023-12-26 02:30:37'),(45,1,'랍스터','Lobster','랍스터.png','신선한 랍스터 통살이 고소한 마요네즈와 만나 풍미가 가득, 입안 가득 신선한 랍스터 샌드위치를 만나보세요!',320,242,20.4,1.8,7.8,578,29000,3,0,0,'2023-12-26 02:31:42','2023-12-26 02:31:42'),(46,1,'하프 랍스터 & 하프 쉬림프','Half Lobster & Half Shrimp','하프 랍스터 & 하프 쉬림프.png','반은 신선한 랍스터 통살이 고소한 마요네즈와 만나 풍미 가득, 반은 쉬림프로 입안 가득 기분까지 좋아지는 샌드위치를 만나보세요!',284,230,18.8,1.2,7.9,578,30000,3,0,0,'2023-12-26 02:32:34','2023-12-26 02:33:44'),(47,1,'스테이크 & 치즈 아보카도 랩','Steak & Cheese Avocado Wrap','r1.png','육즙 가득 스테이크에 프레쉬함을 더해줄 아보카도와 슈레드치즈 그리고 모차렐라치즈까지! 최상의 야채와 소스 조합으로 탄생한 스테이크 & 치즈 아보카도 랩!',478,249,22.3,9.8,5.3,1009,11000,4,1,0,'2023-12-26 05:43:19','2023-12-26 05:49:39'),(48,1,'쉬림프 에그마요 랩','Shrimp Egg Mayo Wrap','r2.png','고소한 에그마요와 탱글한 통새우의 만남, 부드럽고 담백한 조화를 즐겨보세요!',516,253,20.1,9.5,7.4,1082,12000,4,1,0,'2023-12-26 05:44:34','2023-12-26 05:49:50'),(49,1,'치킨 베이컨 미니 랩','Chicken Bacon Mini Wrap','r3.png','담백한 치킨, 바삭한 베이컨 비츠가 쫀득한 통밀 랩에 쏘옥! 치킨 베이컨 미니 랩',391,161,20.8,7.4,5.5,1091,13000,5,1,0,'2023-12-26 05:47:05','2023-12-26 05:50:10'),(50,1,'이탈리안 비엠티','Italian B.M.T™','이탈리안 비엠티s.png','페퍼로니, 살라미 그리고 햄이 만들어내는 최상의 조화! 전세계가 사랑하는 써브웨이의 베스트셀러! Biggest Meatiest Tastiest, its’ B.M.T. 샐러드',226,335,14.3,5.4,8.2,822,11000,6,2,0,'2023-12-26 06:09:40','2023-12-26 06:15:12'),(51,1,'비엘티','B.L.T','비엘티s.png','오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그대로~',153,291,9.5,2.9,7.6,470,12000,6,2,0,'2023-12-26 06:17:52','2023-12-26 06:17:52'),(52,1,'햄','Ham','햄s.png','기본 중에 기본! 풍부한 햄 토핑 가득 샐러드',99.5,327,12.3,0.5,8,438,13000,6,2,0,'2023-12-26 06:19:25','2023-12-26 06:19:25'),(53,1,'참치','Tuna','참치s.png','남녀노소 누구나 좋아하는 담백한 참치와 고소한 마요네즈의 완벽한 조화',153,346,20.1,0.9,7.3,292,14000,6,2,0,'2023-12-26 06:20:43','2023-12-26 06:20:43'),(54,1,'에그마요','Egg Mayo','에그마요s.png','부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러',254,346,9.7,4.3,7.3,312,15000,6,2,0,'2023-12-26 06:21:33','2023-12-26 06:44:42'),(55,1,'치킨 슬라이스','Chicken Slice','치킨슬라이스s.png','닭가슴살로 만든 치킨 슬라이스로 즐기는 담백한 맛!',103,328,11.9,0.4,8.3,509,16000,7,2,0,'2023-12-26 06:22:58','2023-12-26 06:25:37'),(56,1,'치킨 베이컨 아보카도','Chicken Bacon Abocado','치킨베이컨아보카도s.png','담백하게 닭가슴살로 만든 치킨 슬라이스와 베이컨, 부드러운 아보카도의 만남',200,354,13.7,2.5,8.6,721,17000,7,2,0,'2023-12-26 06:24:11','2023-12-26 06:24:11'),(57,1,'로티세리 바비큐 치킨','Rotisserie Barbecue Chicken','로티세리 바비큐 치킨s.png','촉촉한 바비큐 치킨의 풍미가득. 손으로 찢어 더욱 부드러운 치킨이 샐러드에 쏙!',165,356,22.4,2,7.4,299,18000,7,2,0,'2023-12-26 06:25:23','2023-12-26 06:25:23'),(58,1,'로스트 치킨','Roasted Chicken','로스트치킨s.png','오븐에 구워 담백한 저칼로리 닭가슴살의 건강한 풍미',138,344,19.3,0.8,8.3,363,19000,7,2,0,'2023-12-26 06:26:44','2023-12-26 06:26:44'),(59,1,'써브웨이 클럽','Subway Club™','써브웨이 클럽s.png','고소한 베이컨, 담백한 치킨 슬라이스에 햄까지 더해진 완벽한 앙상블',144,324,13.3,1.8,8.1,634,20000,7,2,0,'2023-12-26 06:27:34','2023-12-26 06:27:34'),(60,1,'베지','Veggie Delite™','베지s.png','7가지 야채만으로도 깔끔한 조화! 기본에 충실한 베지 샐러드',46.7,271,2.5,0.1,7.2,19.7,21000,7,2,0,'2023-12-26 06:28:36','2023-12-26 06:28:36'),(62,1,'스파이시 쉬림프','Spicy Shrimp','스파이시 쉬림프s.png','Bigger is Better, 더 커지고 맛있어진 써브웨이 New 스파이시 쉬림프를 만나보세요!',83,321,9.8,0.4,8.7,328,22000,8,2,0,'2023-12-26 06:35:44','2023-12-26 06:35:44'),(63,1,'쉬림프','Shrimp','쉬림프s.png','Bigger is Better, 더 커지고 맛있어진 써브웨이 New 쉬림프를 만나보세요.',79,316,9.6,0.1,7.5,173,23000,8,2,0,'2023-12-26 06:36:38','2023-12-26 06:36:38'),(64,1,'K-바비큐','K-BBQ','k-바비큐s.png','써브웨이 최초의 코리안 스타일 샐러드! 마늘, 간장 그리고 은은한 불맛까지!',210,363,210,1.6,14.3,657,24000,8,2,0,'2023-12-26 06:37:48','2023-12-26 06:37:48'),(65,1,'풀드 포크 바비큐','Pulled Pork Barbecue','풀드포크바비큐s.png','훈연한 미국 스타일의 풀드 포크 바비큐가 가득 올라간 풍미 가득한 샐러드',165,342,18.1,1.6,7.4,446,25000,8,2,0,'2023-12-26 06:38:54','2023-12-26 06:39:01'),(66,1,'스테이크 & 치즈','Steak & Cheese','스테이크&치즈s.png','육즙이 쫙~풍부한 비프 스테이크의 풍미 가득 스테이크 & 치즈 샐러드!',193,352,21.4,3.7,8.4,538,26000,8,2,0,'2023-12-26 06:40:10','2023-12-26 06:40:10'),(67,1,'스파이시 이탈리안','Spicy Italian','스파이시이탈리안s.png','살라미, 페퍼로니가 입안 한가득! 진짜 이탈리아의 맛 가득한 샐러드',302,331,14,8.6,8.3,1008,27000,8,2,0,'2023-12-26 06:41:44','2023-12-26 06:41:44'),(68,1,'치킨 데리야끼','Chicken Teriyaki','치킨데리야끼s.png','담백한 치킨 스트립에 달콤짭쪼름한 써브웨이 특제 데리야끼 소스 토핑으로 더 풍성한 샐러드',152,362,19.8,0.7,9.7,455,28000,8,2,0,'2023-12-26 06:42:57','2023-12-26 06:42:57'),(69,1,'햄, 에그&치즈','Ham, Egg & Cheese','햄, 에그&치즈 단품_20220407064307837.png','푹신한 오믈렛과 햄의 가장 클래식한 조화',319,181,20.3,3.2,6.5,951,11000,10,3,0,'2023-12-26 06:47:32','2023-12-26 06:47:32'),(70,1,'웨스턴, 에그 & 치즈','Western, Egg & Cheese','웨스턴, 에그 & 치즈 단품_20220407064319864.png','토마토, 피망, 양파 세가지 야채가 더해져 더욱 신선한 하루 시작',315,208,18.2,3.1,7.8,849,12000,10,3,0,'2023-12-26 06:48:33','2023-12-26 06:48:33'),(71,1,'햄, 에그 & 치즈 랩','Ham, Egg & Cheese Wrap','ham_egg_n_cheese_wrap_20210315010301754.png','이제 랩으로 즐기세요! 푹신한 오믈렛과 햄의 가장 클래식한 조화',288,171,8,1,6,667,13000,11,3,0,'2023-12-26 06:49:42','2023-12-26 06:49:42'),(72,1,'웨스턴, 에그 & 치즈 랩','Western, Egg & Cheese Wrap','western_egg_n_cheese_wrap_20210315125949618.png','이제 랩으로 즐기세요! 토마토, 피망, 양파 세가지 야채가 더해져 더욱 신선한 하루 시작',298,198,8,1,7,669,14000,11,3,0,'2023-12-26 06:50:31','2023-12-26 06:50:31'),(73,1,'콘 수프','Corn Soup','corn-soup_20231204124355500.png','달콤한 옥수수의 깊은 풍미가 느껴지는 콘 수프',81,118,2.5,1.4,5.3,283,1000,12,4,0,'2023-12-26 06:58:15','2023-12-26 07:03:29'),(74,1,'고구마 칩','Crisscut Sweet Potato','고구마칩.png','오븐에 구워 더 부드럽고 달콤, 담백한 고구마 칩',221,120,3,0.8,7.1,242,2000,12,4,0,'2023-12-26 06:59:17','2023-12-26 06:59:17'),(75,1,'머쉬룸 수프','Mushroom Soup','머쉬룸스프.png','부드러운 머쉬룸의 풍미가 가득한 머쉬룸 수프',118,64,1.5,2.3,2.2,336,3000,12,4,0,'2023-12-26 07:00:44','2023-12-26 07:00:44'),(76,1,'우유','Milk','우유-removebg-preview.png','* 매장 별 판매 여부는 상이할 수 있습니다.',125,200,6,5,9,100,4000,12,4,0,'2023-12-26 07:02:26','2023-12-26 07:02:26'),(77,1,'치킨 베이컨 미니 랩','Chicken Bacon Mini Wrap','chicken_bacon_mini_wrap_20210315021709762-removebg-preview.png','담백한 치킨, 바삭한 베이컨 비츠가 쫀득한 통밀 랩에 쏘옥! 치킨 베이컨 미니 랩',391,161,20.8,7.4,5.5,1091,5000,12,4,0,'2023-12-26 07:03:17','2023-12-26 07:03:17'),(78,1,'웨지 포테이토','Ovenbaked Wedge Potatoes','웨지포테이토_20220916104739353-removebg-preview.png','오븐에 구워 더 담백, 겉은 바삭 속은 촉촉한 건강한 사이드',140,100,2.5,1.5,0.7,369,6000,12,4,0,'2023-12-26 07:04:32','2023-12-26 07:04:32'),(79,1,'Cheesy 웨지 포테이토','Cheesy Ovenbaked Wedge Potatoes','치지웨지포테이토_20220916104711296-removebg-preview.png','치즈 풍미 한가득, 오븐에 구워 더 담백한 겉은 바삭 속은 촉촉한 건강한 사이드',194,114,5.8,3.9,0.8,454,7000,12,4,0,'2023-12-26 07:06:16','2023-12-26 07:06:16'),(80,1,'Bacon Cheesy 웨지 포테이토','Bacon Cheesy Ovenbaked Wedge Potatoes','베이컨치지웨지포테이토_20220916104811767-removebg-preview.png','짭쪼름한 베이컨과 치즈의 궁합을 더한, 오븐에 구워 더 담백한 겉은 바삭 속은 촉촉한 건강한 사이드',247,124,9.3,5.3,0.9,679,8000,12,4,0,'2023-12-26 07:07:33','2023-12-26 07:07:33'),(81,1,'더블 초코칩','Double Chocolate Chip','double_chocolate_chip_20210315021500386-removebg-preview.png','부드러운 화이트초콜릿과 다크 초콜릿의 절묘한 조화로 더욱 풍부한 달콤함',212,45,2,5.4,19.9,165,9000,12,4,0,'2023-12-26 07:08:35','2023-12-26 07:08:35'),(82,1,'초코칩','Chocolate Chip','chocolate_chip_20210315021446423-removebg-preview.png','알알이 가득한 초코의 가장 클래식한 달콤함',228,45,2.1,5.6,19.3,165,10000,12,4,0,'2023-12-26 07:09:22','2023-12-26 07:09:22'),(83,1,'오트밀 레이즌','Oatmeal Raisin','oatmeal_rasin_20210315021428482-removebg-preview.png','건포도와 귀리에 살짝 더해진 계피향의 환상적인 조화',200,45,2.4,3.8,15.8,130,11000,12,4,0,'2023-12-26 07:10:31','2023-12-26 07:10:31'),(84,1,'라즈베리 치즈케익','Raspberry Cheese Cake','raspberry_cheese_cake_20210315021413854-removebg-preview.png','부드럽고 풍부한 치즈와 새콤달콤 라즈베리의 달콤한 만남',204,45,2,5,15.8,176,12000,12,4,0,'2023-12-26 07:14:08','2023-12-26 07:14:15'),(85,1,'화이트 초코 마카다미아','White Choco Macadamia','white_choco_macadamia_20210315021402115-removebg-preview.png','고소함 가득한 마카다미아와 달콤한 화이트 초콜릿의 환상 궁합',245,45,2.1,5.7,18.9,178,13000,12,4,0,'2023-12-26 07:14:58','2023-12-26 07:14:58'),(86,1,'프레쉬 파티플래터','Fresh Party Platter','g1-removebg-preview.png','치킨 슬라이스, 햄, 참치, 에그마요, 클럽으로 구성된 어디서든 신선하게 즐길 수 있는 파티플래터',0,0,0,0,0,0,60000,13,5,0,'2023-12-26 07:20:50','2023-12-26 07:20:50'),(87,1,'베스트 파티플래터','Best Party Platter','g2-removebg-preview.png','치킨 슬라이스, 참치, 스파이시 이탈리안, 이탈리안 비엠티, 써브웨이 클럽으로 구성된 모두의 입맛을 만족시키는 베스트 파티플래터',0,0,0,0,0,0,70000,13,5,0,'2023-12-26 07:21:36','2023-12-26 07:21:36'),(88,1,'자이언트 써브 90cm','Giant Sub 3feet','g3-removebg-preview.png','보는재미, 먹는재미! 특별한 날은 자이언트 써브로 더욱 특별하게 ※이탈리안 비엠티, 햄, 터키, 스파이시 이탈리안 중 선택',0,0,0,0,0,0,80000,13,5,0,'2023-12-26 07:22:09','2023-12-26 07:22:09'),(89,1,'자이언트 써브 180cm','Giant Sub 6feet','g4-removebg-preview.png','보는재미, 먹는재미! 특별한 날은 자이언트 써브로 더욱 특별하게 ※이탈리안 비엠티, 햄, 터키, 스파이시 이탈리안 중 선택',0,0,0,0,0,0,90000,13,5,0,'2023-12-26 07:22:44','2023-12-26 07:22:44'),(90,1,'쿠키박스','Cookie box','g5-removebg-preview.png','즐거운 순간을 5가지 맛의 쿠키와 함께 즐기세요 (12개입)',0,0,0,0,0,0,10000,14,5,0,'2023-12-26 07:26:17','2023-12-26 07:26:17'),(91,1,'쿠키플래터','Cookie Platter','g6-removebg-preview.png','즐거운 순간을 5가지 맛의 쿠키와 함께 즐기세요 (36개입)',0,0,0,0,0,0,20000,14,5,0,'2023-12-26 07:26:40','2023-12-26 07:26:40');
/*!40000 ALTER TABLE `food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredient`
--

DROP TABLE IF EXISTS `ingredient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingredient` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '식별자 ID (기본키)',
  `admin_id` int NOT NULL COMMENT '수정/추가 한 관리자 이름',
  `kname` varchar(255) NOT NULL COMMENT '한글이름',
  `ename` varchar(255) NOT NULL COMMENT '영어이름',
  `image_url` varchar(255) NOT NULL COMMENT '재료 사진',
  `kcal` float DEFAULT NULL COMMENT '칼로리',
  `comment` varchar(255) DEFAULT NULL COMMENT '재료 설명',
  `kinds` int NOT NULL COMMENT '0:빵,1:야채,2:치즈,3:소스,4:육류',
  `add_price` int NOT NULL COMMENT '추가가격',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `admin_id` (`admin_id`),
  CONSTRAINT `ingredient_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredient`
--

LOCK TABLES `ingredient` WRITE;
/*!40000 ALTER TABLE `ingredient` DISABLE KEYS */;
INSERT INTO `ingredient` VALUES (1,1,'허니','Honey Oat','img_recipe_b01.png',NULL,'고소한 위트빵에 오트밀 가루를 묻혀고소함과 식감이 두배로',0,1500,'2023-12-14 19:08:44','2023-12-27 05:48:38'),(3,1,'파마산 오레가노','Parmesan Oregano','img_recipe_b04.jpg',NULL,'부드러운 화이트빵에 파마산 오레가노 시즈닝을 묻혀 허브향 가득',0,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(4,1,'위트','Wheat','img_recipe_b03.jpg',NULL,'여러 가지 곡물로 만들어 건강하고 고소한 맛의 곡물빵',0,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(5,1,'화이트','White','img_recipe_b05.jpg',NULL,'가장 클래식한 빵으로 부드러운 식감이 매력 포인트',0,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(6,1,'플랫브레드','Flat Bread','img_recipe_b06.jpg',NULL,'이름처럼 납작 모양에 피자도우처럼 쫀득한 맛이 일품',0,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(7,1,'토마토','Tomatoes','img_recipe_v02.jpg',NULL,NULL,1,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(8,1,'오이','Cucumbers','img_recipe_v03.jpg',NULL,NULL,1,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(9,1,'양상추','Lettuce','img_recipe_v01.jpg',NULL,NULL,1,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(10,1,'양파','Red Onions','img_recipe_v05.jpg',NULL,NULL,1,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(11,1,'피클','Pickles','img_recipe_v06.jpg',NULL,NULL,1,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(12,1,'피망','Peppers','img_recipe_v04.jpg',NULL,NULL,1,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(13,1,'올리브','Olives','img_recipe_v07.jpg',NULL,NULL,1,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(14,1,'할라피뇨','Jalapenos','img_recipe_v08.jpg',NULL,NULL,1,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(15,1,'아보카도','Avocado','img_recipe_v09.jpg',NULL,NULL,1,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(16,1,'아메리칸 치즈','American Cheese','img_recipe_c01.jpg',NULL,NULL,2,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(17,1,'슈레드 치즈','Shredded Cheese','img_recipe_c02.jpg',NULL,NULL,2,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(18,1,'모차렐라 치즈','Mozzarella Cheese','img_recipe_c03.jpg',NULL,NULL,2,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(19,1,'랜치','Ranch','img_recipe_s01.jpg',NULL,'고소한 마요네즈와 레몬즙의 만남! 고소함이 두배!',3,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(20,1,'스위트 어니언','Sweet Onion','img_recipe_s07.jpg',NULL,'써브웨이만의 특제 레시피로 만든 달콤한 양파소스',3,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(21,1,'마요네즈','Mayonnaise','img_recipe_s02.jpg',NULL,'말이 필요없는 고소함의 대명사, 마요네즈 소스',3,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(22,1,'스위트 칠리','Sweet Chilli','img_recipe_s12.jpg',NULL,'매콤한 칠리에 더해진 기분 좋은 달콤함!',3,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(23,1,'스모크 바베큐','Smoke BBQ','img_recipe_s17.jpg',NULL,'스모크 향과 달콤한 바비큐의 완벽한 조화',3,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(24,1,'핫 칠리','Hot Chilli','img_recipe_s18.jpg',NULL,'진짜 매운맛을 보고 싶다면? 써브웨이의 핫 칠리!',3,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(25,1,'허니 머스터드','Honey Mustard','img_recipe_s03.jpg',NULL,'겨자씨가 아낌없이 들어간 달콤한 머스터드 소스',3,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(26,1,'사우스웨스트 치폴레','Southwest Chipotle','img_recipe_s09.jpg',NULL,'핫 칠리와 고소한 마요네즈가 만난 이국적인 매콤한 맛',3,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(27,1,'홀스래디쉬','Horseradish','img_recipe_s04.jpg',NULL,'고소한 마요네즈와 고추냉이의 이색적인 만남! 매니아층을 사로잡은 매력No.1 소스',3,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(28,1,'머스타드','Yellow Mustard','img_recipe_s11.jpg',NULL,'겨자씨로 만든 오리지날 머스터드 소스',3,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(29,1,'올리브 오일','Olive Oil','img_recipe_s06.jpg',NULL,'담백하고 깔끔하게 즐기고 싶다면 주저하지 말고 올리브오일',3,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(30,1,'레드 와인 식초','Red Wine Vinaigrette','img_recipe_s05.jpg',NULL,'레드와인을 발효시켜 풍미가 가득한 식초',3,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(31,1,'소금','Salt','img_recipe_s13.jpg',NULL,NULL,3,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(32,1,'후추','Black Pepper','img_recipe_s14.jpg',NULL,NULL,3,1500,'2023-12-14 19:08:44','2023-12-14 19:08:44'),(33,1,'페퍼로니','페파로우니','인육치킹.png',NULL,'매콤한 페퍼로니',4,60000,'2023-12-22 00:09:20','2023-12-27 05:39:52'),(34,1,'베이컨','bakcun','베이컨.png',NULL,'얇고 바삭하게 구운 베이컨',4,4000,'2023-12-22 01:49:32','2023-12-27 05:40:17');
/*!40000 ALTER TABLE `ingredient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inquiry`
--

DROP TABLE IF EXISTS `inquiry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inquiry` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '식별자 ID (기본키)',
  `admin_id` int DEFAULT NULL COMMENT '수정/추가 한 관리자 이름',
  `user_id` int DEFAULT NULL COMMENT '문의한 유저 아이디',
  `kinds` char(1) NOT NULL COMMENT '0:FAQ, 1: 문의사항',
  `tags` char(1) NOT NULL COMMENT '0:기타,1:사이트이용,2:포인트,3:제품,4:매장이용',
  `title` varchar(255) NOT NULL COMMENT '게시판 제목',
  `content` text COMMENT '본문 내용',
  `comment` varchar(255) DEFAULT NULL,
  `add_file` varchar(255) DEFAULT NULL COMMENT '이미지가 필요한 경우 경로 작성',
  `status` char(1) NOT NULL COMMENT '0:대기, 1:완료',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `admin_id` (`admin_id`),
  CONSTRAINT `inquiry_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inquiry`
--

LOCK TABLES `inquiry` WRITE;
/*!40000 ALTER TABLE `inquiry` DISABLE KEYS */;
INSERT INTO `inquiry` VALUES (1,1,NULL,'0','2','FAQ예시입니다','태그는 사이트이용방법입니다.','1번 답변 테스트',NULL,'1','2023-12-15 00:00:00','2023-12-27 01:59:39'),(2,NULL,1,'1','0','유저문의 제목입니다.','뭐늬 내용입니다.','sadfasd',NULL,'1','2023-12-15 00:00:00','2023-12-29 02:21:20'),(3,1,1,'0','2','결제 오류 문의드려요','결제도중 오류가 떳어요 어떻게 해야할까요','답변입니다.이것은','event_2023_super_pop.png','1','2023-12-15 08:43:25','2023-12-17 07:53:47'),(4,NULL,1,'1','4','배송이 늦게되네요','주문한 물건이 늦게오네요 어디까지 배달됫나요',NULL,'event_caddo_summer_slipper_beach pack.png','1','2023-12-15 08:43:25','2023-12-21 00:01:50'),(5,NULL,1,'0','3','포인트 적립이 안됫어요','최근에 구매한 물건에 대한 포인트가 적립이 안됫어요 확인해주세요',NULL,'event_eat_fresh_feel_good.png','0','2023-12-15 08:43:25','2023-12-15 08:43:25'),(6,NULL,1,'1','2','환불하고싶어요','단순변심으로 물건을 사고싶지 않아졋어요',NULL,'event_cha_eunwoo_menu_promotion.png','1','2023-12-15 08:43:25','2023-12-15 08:43:25'),(7,NULL,1,'1','3','주문 취소할래요','실수로 잘못 주문했어요 취소해줘요',NULL,'event_mon_surprise.png','0','2023-12-15 08:43:25','2023-12-15 08:43:25'),(8,NULL,1,'1','4','제품 교환이 되나요','받은 물건이 마음에 들지않아서 교환하고싶은데 어떻게 해야하나요',NULL,'event_chicken_collection.png','1','2023-12-15 08:43:25','2023-12-15 08:43:25'),(9,NULL,1,'0','2','회원가입이 되질 않아요','회원가입을 했는데 오류가 떳어요 이거 어떻게 하나요',NULL,'event_lobster_collection.png','0','2023-12-15 08:43:25','2023-12-15 08:43:25'),(10,NULL,1,'1','1','이거 어떻게 써요','물건이 도착했는데 동작을 안하네요 어떻게 써요',NULL,'event_new_shrimp_series.png','0','2023-12-15 08:43:25','2023-12-15 08:43:25'),(11,NULL,1,'0','1','물건이 불량으로 왔어요','배송된 물건이 불량인데 어떻게 조치해주실 건가요',NULL,'event_order_by_hand.png','1','2023-12-15 08:43:25','2023-12-15 08:43:25'),(12,NULL,1,'1','4','계정 로그인이 안된대요','로그인이 안되는데 어떻게 해결하나요',NULL,'event_spicy_series.png','1','2023-12-15 08:43:25','2023-12-15 08:43:25'),(13,1,NULL,'0','2','결제 오류 문의드려요','결제도중 오류가 떳어요 어떻게 해야할까요',NULL,'event_2023_super_pop.png','0','2023-12-15 11:42:38','2023-12-15 11:42:38'),(14,1,NULL,'1','4','배송이 늦게되네요','주문한 물건이 늦게오네요 어디까지 배달됫나요',NULL,'event_caddo_summer_slipper_beach pack.png','1','2023-12-15 11:42:38','2023-12-15 11:42:38'),(15,1,NULL,'1','4','제품 교환이 되나요','받은 물건이 마음에 들지않아서 교환하고싶은데 어떻게 해야하나요',NULL,'event_chicken_collection.png','1','2023-12-15 11:42:38','2023-12-15 11:42:38'),(16,1,NULL,'1','2','환불하고싶어요','단순변심으로 물건을 사고싶지 않아졋어요',NULL,'event_cha_eunwoo_menu_promotion.png','1','2023-12-15 11:42:38','2023-12-15 11:42:38'),(17,1,NULL,'1','3','주문 취소할래요','실수로 잘못 주문했어요 취소해줘요',NULL,'event_mon_surprise.png','0','2023-12-15 11:42:38','2023-12-15 11:42:38'),(18,1,NULL,'0','3','포인트 적립이 안됫어요','최근에 구매한 물건에 대한 포인트가 적립이 안됫어요 확인해주세요',NULL,'event_eat_fresh_feel_good.png','0','2023-12-15 11:42:38','2023-12-15 11:42:38'),(19,1,NULL,'1','1','이거 어떻게 써요','물건이 도착했는데 동작을 안하네요 어떻게 써요',NULL,'event_new_shrimp_series.png','0','2023-12-15 11:42:38','2023-12-15 11:42:38'),(20,1,NULL,'0','2','회원가입이 되질 않아요','회원가입을 했는데 오류가 떳어요 이거 어떻게 하나요',NULL,'event_lobster_collection.png','0','2023-12-15 11:42:38','2023-12-15 11:42:38'),(21,1,NULL,'0','1','물건이 불량으로 왔어요','배송된 물건이 불량인데 어떻게 조치해주실 건가요',NULL,'event_order_by_hand.png','1','2023-12-15 11:42:38','2023-12-15 11:42:38'),(22,1,NULL,'1','4','계정 로그인이 안된대요','로그인이 안되는데 어떻게 해결하나요',NULL,'event_spicy_series.png','1','2023-12-15 11:42:38','2023-12-15 11:42:38');
/*!40000 ALTER TABLE `inquiry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oreders`
--

DROP TABLE IF EXISTS `oreders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oreders` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '식별자 ID (기본키)',
  `user_id` int NOT NULL COMMENT '고객번호',
  `store_id` int NOT NULL COMMENT '매장번호',
  `food_id` int DEFAULT NULL COMMENT '기본음식',
  `status` int NOT NULL COMMENT '0:조리중, 1:배달중, 2:완료, 3:취소',
  `cancel` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0:주문, 1:취소',
  `order_list` varchar(255) NOT NULL COMMENT '주문목록',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `store_id` (`store_id`),
  KEY `food_id` (`food_id`),
  CONSTRAINT `oreders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `oreders_ibfk_2` FOREIGN KEY (`store_id`) REFERENCES `store` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `oreders_ibfk_3` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oreders`
--

LOCK TABLES `oreders` WRITE;
/*!40000 ALTER TABLE `oreders` DISABLE KEYS */;
/*!40000 ALTER TABLE `oreders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store`
--

DROP TABLE IF EXISTS `store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `store` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '식별자 ID (기본키)',
  `name` varchar(255) NOT NULL COMMENT '업체명',
  `email` varchar(45) NOT NULL,
  `address` varchar(255) NOT NULL COMMENT '주소(지번)',
  `phone` int NOT NULL COMMENT '매장 전화번호',
  `oner` varchar(255) NOT NULL COMMENT '대표이름',
  `status` int NOT NULL COMMENT '운영상태(0:운영종료, 1:운영중, 2:승인대기)',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store`
--

LOCK TABLES `store` WRITE;
/*!40000 ALTER TABLE `store` DISABLE KEYS */;
INSERT INTO `store` VALUES (4,'www','www@www.www','www',100000000,'wwww',1,'2023-12-26 06:06:58','2023-12-29 02:22:17');
/*!40000 ALTER TABLE `store` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '사용자(user) 식별자 ID (기본키)',
  `email` varchar(255) NOT NULL COMMENT '이메일',
  `password` varchar(255) NOT NULL COMMENT '비밀번호',
  `name` varchar(100) NOT NULL COMMENT '이름',
  `contact_number` varchar(50) NOT NULL COMMENT '연락처',
  `role` int NOT NULL DEFAULT '0' COMMENT '0(일반), 1(사업자)',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `contact_number` (`contact_number`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (3,'ssp04364@naver.com','gkals5542@','차하민','01021705542',0,'2023-12-15 06:27:01','2023-12-15 06:27:01'),(5,'hamincha2@gmail.com','gkals5542@','차하은','01069953245',1,'2023-12-15 06:28:59','2023-12-15 06:28:59'),(6,'junho2088@naver.com','qwer1234','박준호','01040298678',0,'2023-12-17 11:11:23','2023-12-17 11:11:23'),(8,'jsw5sw@naver.com','3185as','정선우','01093864594',0,'2023-12-27 04:53:59','2023-12-27 04:53:59'),(9,'gmldi10009@gmail.com','asd7584','조경익','01071793870',0,'2023-12-28 00:15:24','2023-12-28 00:15:24'),(10,'qwer1234@gmail.com','qwer1234','김정훈','01092356072',0,'2023-12-28 06:11:02','2023-12-28 06:11:02'),(11,'asd1234@gmail.com','asd1234','조경익','01000000000',0,'2023-12-29 02:15:27','2023-12-29 02:15:27');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'myway'
--

--
-- Dumping routines for database 'myway'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-09 12:14:55
