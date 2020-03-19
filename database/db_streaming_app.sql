-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 19, 2020 at 11:32 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_streaming_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_login`
--

DROP TABLE IF EXISTS `tbl_login`;
CREATE TABLE IF NOT EXISTS `tbl_login` (
  `login_id` int(11) NOT NULL AUTO_INCREMENT,
  `login_uname` varchar(15) NOT NULL,
  `login_password` varchar(20) NOT NULL,
  `login_users` int(2) NOT NULL,
  PRIMARY KEY (`login_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_login`
--

INSERT INTO `tbl_login` (`login_id`, `login_uname`, `login_password`, `login_users`) VALUES
(1, 'user1', 'userpassword', 1),
(2, 'user2', 'userpassword', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movie`
--

DROP TABLE IF EXISTS `tbl_movie`;
CREATE TABLE IF NOT EXISTS `tbl_movie` (
  `movie_id` int(11) NOT NULL AUTO_INCREMENT,
  `movie_name` varchar(40) NOT NULL,
  `movie_desc` text NOT NULL,
  `movie_country` varchar(20) NOT NULL,
  `movie_genre` varchar(40) NOT NULL,
  `movie_poster` varchar(40) NOT NULL,
  `movie_video` varchar(40) NOT NULL,
  `movie_date` varchar(30) NOT NULL,
  `movie_score` float NOT NULL,
  `movie_pg` int(1) NOT NULL,
  PRIMARY KEY (`movie_id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_movie`
--

INSERT INTO `tbl_movie` (`movie_id`, `movie_name`, `movie_desc`, `movie_country`, `movie_genre`, `movie_poster`, `movie_video`, `movie_date`, `movie_score`, `movie_pg`) VALUES
(1, 'Parasite', 'A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. But their easy life gets complicated when their deception is threatened with exposure.', 'South Korea', 'Comedy, Drama, Thriller', 'parasite.jpg', 'parasite.mp4', '2019', 8.6, 4),
(2, 'Once Upon a Time... in Hollywood', 'A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood\'s Golden Age in 1969 Los Angeles.', 'USA', 'Comedy, Drama ', 'once.jpg', 'once.mp4', '2019', 7.7, 4),
(3, 'Rocketman', 'A musical fantasy about the fantastical human story of Elton John\'s breakthrough years.', 'USA', 'Biography, Drama, Music', 'rocketman.jpg', 'rocketman.mp4', '2019', 7.3, 4),
(4, 'Goodfellas', 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.', 'USA', 'Biography, Crime, Drama', 'goodfellas.jpg', 'goodfellas.mp4', '1990', 8.7, 4),
(5, 'Teenage Mutant Ninja Turtles', 'Four teenage mutant ninja turtles emerge from the shadows to protect New York City from a gang of criminal ninjas.', 'USA', 'Action, Adventure, Comedy', 'tmnt.jpg', 'tmnt.mp4', '1990', 6.8, 1),
(6, 'The Godfather: Part III', 'In the midst of trying to legitimize his business dealings in New York City and Italy in 1979, aging Mafia Don Michael Corleone seeks to avow for his sins, while taking his nephew Vincent Mancini under his wing.', 'USA', 'Crime, Drama', 'godfather3.jpg', 'godfather3.mp4', '1990', 7.6, 4),
(7, 'The Shining', 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.', 'USA', 'Drama, Horror', 'shining.jpg', 'shining.mp4', '1980', 8.4, 4),
(8, 'Raging Bull', 'The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.', 'USA', 'Biography, Drama, Sport ', 'raging-bull.jpg', 'raging-bull.mp4', '1980', 8.2, 4),
(9, 'Full Metal Jacket', 'A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.', 'USA', 'Drama, War', 'full-metal-jacket.jpg', 'full-metal-jacket.mp4', '1987', 8.3, 4),
(10, 'Fear and Loathing in Las Vegas', 'An oddball journalist and his psychopathic lawyer travel to Las Vegas for a series of psychedelic escapades.', 'USA', 'Adventure, Comedy, Drama', 'fear-loathing.jpg', 'fear-loathing.mp4', '1998', 7.6, 4),
(11, 'Jaws', 'When a killer shark unleashes chaos on a beach community, it\'s up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.', 'USA', 'Adventure, Drama, Thriller', 'jaws.jpg', 'jaws.mp4', '1975', 8, 1),
(12, 'A Clockwork Orange', 'In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn\'t go as planned.', 'USA', 'Crime, Drama, Sci-Fi', 'clockwork-orange.jpg', 'clockwork-orange.mp4', '1971', 8.3, 4),
(13, 'The Godfather', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 'USA', 'Crime, Drama ', 'godfather.jpg', 'godfather.mp4', '1972', 9.2, 4),
(14, 'Psycho', 'A Phoenix secretary embezzles forty thousand dollars from her employer\'s client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.', 'USA', 'Horror, Mystery, Thriller', 'psycho.jpg', 'psycho.mp4', '1960', 8.5, 4),
(15, 'The Good, the Bad and the Ugly', 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.', 'USA', 'Western', 'good-bad-ugly.jpg', 'good-bad-ugly.mp4', '1966', 8.8, 4),
(16, 'Spartacus', 'The slave Spartacus leads a violent revolt against the decadent Roman Republic.', 'Brazil', 'Adventure, Biography, Drama', 'spartacus.jpg', 'spartacus.mp4', '1960', 7.9, 2),
(17, 'Sunset Blvd.', 'A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.', 'Australia', 'Drama, Film-Noir', 'sunset-blvd.jpg', 'sunset-blvd.mp4', '1950', 8.4, 0),
(18, 'Cinderella', 'When Cinderella\'s cruel stepmother prevents her from attending the Royal Ball, she gets some unexpected help from the lovable mice Gus and Jaq, and from her Fairy Godmother.', 'USA', 'Animation, Family, Fantasy', 'cinderella.jpg', 'cinderella.mp4', '1950', 7.3, 0),
(19, 'Singin\' in the Rain', 'A silent film production company and cast make a difficult transition to sound.', 'USA', 'Comedy, Musical, Romance ', 'singin-rain.jpg', 'singin-rain.mp4', '1952', 8.3, 0),
(20, 'Frozen II', 'Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa\'s powers in order to save their kingdom.', 'USA', 'Animation, Adventure, Comedy', 'frozen2.jpg', 'frozen2.mp4', '2019', 7, 1),
(21, 'Toy Story', 'A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy\'s room.', 'USA', 'Animation, Adventure, Comedy', 'toy-story.jpg', 'toy-story.mp4', '1995', 8.3, 0),
(22, 'Pokémon Detective Pikachu', 'In a world where people collect Pokémon to do battle, a boy comes across an intelligent talking Pikachu who seeks to be a detective.', 'USA', 'Action, Adventure, Comedy', 'pikachu-detective.jpg', 'pikachu-detective.mp4', '2019', 6.6, 1),
(23, 'The Lion King', 'After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.', 'USA', 'Animation, Adventure, Drama', 'lion-king.jpg', 'lion-king.mp4', '2019', 6.9, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_music`
--

DROP TABLE IF EXISTS `tbl_music`;
CREATE TABLE IF NOT EXISTS `tbl_music` (
  `music_id` int(11) NOT NULL AUTO_INCREMENT,
  `music_name` varchar(40) NOT NULL,
  `music_author` varchar(40) NOT NULL,
  `music_genre` varchar(40) NOT NULL,
  `music_poster` varchar(40) NOT NULL,
  `music_video` varchar(40) NOT NULL,
  `music_date` varchar(30) NOT NULL,
  `music_pg` int(1) NOT NULL,
  PRIMARY KEY (`music_id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_music`
--

INSERT INTO `tbl_music` (`music_id`, `music_name`, `music_author`, `music_genre`, `music_poster`, `music_video`, `music_date`, `music_pg`) VALUES
(1, 'Old Town Road', 'Lil Nas X', 'Rap, Trap', 'old-town-road.jpg', 'old-town-road.mp4', '2018', 0),
(2, 'Bad Guy', 'Billie Eilish', 'Pop-trap, Dance-pop', 'bad-guy.jpg', 'bad-guy.mp4', '2019', 3),
(3, 'Smells Like Teen Spirit', 'Nirvana', 'Grunge, Rock', 'teen-spirit.jpg', 'teen-spirit.mp4', '1991', 4),
(4, 'Macarena', 'Los del Río', 'Dance-pop', 'macarena.jpg', 'macarena.mp4', '1993', 0),
(5, 'Sweet Dreams', 'Eurythmics', 'New-vawe', 'sweet-dreams.jpg', 'sweet-dreams.mp4', '1983', 1),
(6, 'Never Gonna Give You Up', 'Rick Astley', 'Dance-pop, Soul', 'never-give-up.jpg', 'never-give-up.mp4', '1987', 0),
(7, 'Bohemian Rhapsody', 'Queen', 'Progressive-Pop, Hard-Rock', 'rhapsody.jpg', 'rhapsody.mp4', '1975', 4),
(8, 'Hot Stuff', 'Donna Summer', 'Disco', 'hot-stuff.jpg', 'hot-stuff.mp4', '1979', 4),
(9, 'The House of the Rising Sun', 'The Animals', 'Rock', 'rising-sun.jpg', 'rising-sun.mp4', '1964', 4),
(10, 'Paint It Black', 'The Rolling Stones', 'Rock', 'paint-black.jpg', 'paint-black.mp4', '1966', 3),
(11, 'My Way', 'Frank Sinatra', 'Traditional-pop', 'my-way.jpg', 'my-way.mp4', '1969', 3),
(12, 'Don\'t Be Cruel', 'Elvis Presley', 'Rock-n-roll', 'dont-be-cruel.jpg', 'dont-be-cruel.mp4', '1956', 3),
(13, 'Earth Angel', 'The Penguins', 'Blues', 'earth-angel.jpg', 'earth-angel.mp4', '1954', 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tv`
--

DROP TABLE IF EXISTS `tbl_tv`;
CREATE TABLE IF NOT EXISTS `tbl_tv` (
  `tv_id` int(11) NOT NULL AUTO_INCREMENT,
  `tv_name` varchar(40) NOT NULL,
  `tv_desc` text NOT NULL,
  `tv_country` varchar(20) NOT NULL,
  `tv_genre` varchar(40) NOT NULL,
  `tv_poster` varchar(40) NOT NULL,
  `tv_video` varchar(40) NOT NULL,
  `tv_date` varchar(30) NOT NULL,
  `tv_pg` int(1) NOT NULL,
  PRIMARY KEY (`tv_id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_tv`
--

INSERT INTO `tbl_tv` (`tv_id`, `tv_name`, `tv_desc`, `tv_country`, `tv_genre`, `tv_poster`, `tv_video`, `tv_date`, `tv_pg`) VALUES
(1, 'The Simpsons', 'The satiric adventures of a working-class family in the misfit city of Springfield.', 'USA', 'Animation, Comedy ', 'simpsons.jpg', 'simpsons.mp4', '1990', 1),
(2, 'Rick and Morty', 'An animated series that follows the exploits of a super scientist and his not-so-bright grandson.', 'USA', 'Animation, Adventure, Comedy', 'rick-morty.jpg', 'rick-morty.mp4', '2013', 2),
(3, 'Brooklyn Nine-Nine', 'Jake Peralta, an immature, but talented N.Y.P.D. detective in Brooklyn\'s 99th Precinct, comes into immediate conflict with his new commanding officer, the serious and stern Captain Ray Holt.', 'USA', 'Comedy, Crime ', 'brooklyn-nine.jpg', 'brooklyn-nine.mp4', '2013', 3),
(4, 'Friends', 'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.', 'USA', 'Comedy, Romance', 'friends.jpg', 'friends.mp4', '1994', 4),
(5, 'Tales from the Crypt', 'Tales of horror based on the gruesome E.C. comic books of the 1950s presented by the legendary Crypt Keeper, a sinister ghoul obsessed with gallows humor and horrific puns.', 'USA', 'Comedy, Crime, Fantasy', 'from-crypt.jpg', 'from-crypt.mp4', '1989', 2),
(6, 'The Joy of Painting', 'In this half-hour program, artist Bob Ross paints on canvas a beautiful oil painting.', 'USA', 'Documentary, Family', 'joy-painting.jpg', 'joy-painting.mp4', '1983', 0),
(7, 'Scooby Doo, Where Are You!', 'A group of teenage friends and their Great Dane (Scooby-Doo) travel in a bright green van solving strange and hilarious mysteries, while returning from or going to a regular teenage function.', 'USA', 'Animation, Adventure, Comedy', 'scooby-doo.jpg', 'scooby-doo.mp4', '1970', 0),
(8, 'Star Trek', 'In the 23rd Century, Captain James T. Kirk and the crew of the U.S.S. Enterprise explore the galaxy and defend the United Federation of Planets.', 'USA', 'Action, Adventure, Sci-Fi', 'star-trek.jpg', 'star-trek.mp4', '1970', 2),
(9, 'Batman', 'The Caped Crusader and his young ward battle evildoers in Gotham City.', 'USA', 'Action, Adventure, Comedy', 'batman.jpg', 'batman.mp4', '1966', 1),
(10, 'The Flintstones', 'The misadventures of two modern-day Stone Age families, the Flintstones and the Rubbles.', 'USA', 'Animation, Adventure, Comedy', 'flintstones.jpg', 'flintstones.mp4', '1960', 1),
(11, 'The Twilight Zone', 'Ordinary people find themselves in extraordinarily astounding situations, which they each try to solve in a remarkable manner.', 'USA', 'Drama, Fantasy, Horror', 'twilight-zone.jpg', 'twilight-zone.mp4', '1959', 3),
(12, 'Bonanza', 'The Wild West adventures of Ben Cartwright and his sons as they run and defend their Nevada ranch while helping the surrounding community.', 'USA', 'Western', 'bonanza.jpg', 'bonanza.mp4', '1959', 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

DROP TABLE IF EXISTS `tbl_users`;
CREATE TABLE IF NOT EXISTS `tbl_users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_fname` varchar(30) NOT NULL,
  `user_lname` varchar(30) NOT NULL,
  `user_uname` varchar(30) NOT NULL,
  `user_password` varchar(30) NOT NULL,
  `user_avatar` varchar(30) NOT NULL,
  `user_isadmin` tinyint(1) NOT NULL,
  `user_permissions` int(1) NOT NULL,
  `user_group` int(2) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`user_id`, `user_fname`, `user_lname`, `user_uname`, `user_password`, `user_avatar`, `user_isadmin`, `user_permissions`, `user_group`) VALUES
(1, 'Gleb', 'Ada', 'adAda', 'adAda', 'dog.jpg', 1, 5, 1),
(2, 'Jane', 'Anderson', 'kid1', 'password', 'default.png', 0, 1, 1),
(3, 'Nitya', 'Buch', 'nb', 'password', 'dog2.jpg', 0, 5, 1),
(4, 'Joe', 'Anderson', 'kid2', 'password', 'default.png', 0, 3, 1),
(6, 'Vito', 'Corleone', 'vito-corleone', 'password', 'vito.jpg', 1, 5, 2),
(7, 'Michael', 'Corleone', 'michael', 'password', 'michael.jpg', 0, 4, 2),
(8, 'Tom', 'Hagen', 'tom-h', 'password', 'tom.jpg', 0, 3, 2),
(9, 'Kay', 'Adams', 'kay', 'password', 'kay.jpg', 0, 2, 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
