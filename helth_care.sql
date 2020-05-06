-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 06, 2020 at 11:59 AM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `helth_care`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `AID` int(50) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `nic` varchar(20) DEFAULT NULL,
  `phone` int(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `reportID` int(11) DEFAULT NULL,
  `sessionID` int(11) DEFAULT NULL,
  `patientID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`AID`, `name`, `nic`, `phone`, `email`, `reportID`, `sessionID`, `patientID`) VALUES
(1, 'Vihanga', '963552777V', 765462043, 'vihanga@gmail.com', 1, 2, 2),
(2, 'Kamal', '963582147V', 765894236, 'kamal@gmail.com', 2, 3, 4),
(3, 'Layodya', '968547986V', 768957485, 'layodya@gmail.com', 3, 2, 5),
(4, 'Mihiranga', '963552778V', 765462042, 'mihira@gmail.com', 2, 1, 2),
(5, 'Naradha', '923658749V', 789653587, 'naradha@gmail.com', 5, 3, 1),
(6, 'Sadun', '464654646V', 765485698, 'sadun@gmail.com', 1, 2, 2),
(7, 'Nadeesh', '963587412V', 754896324, 'nadeesh@gmail.com', 2, 3, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`AID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `AID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
