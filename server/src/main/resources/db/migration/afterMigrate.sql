# Cleanup
delete
from Salary;
delete
from Employee_Department;
delete
from Employee;
delete
from Department;
delete
from Title;

#Inserts
insert into Title
values (1, 'Staff'),
       (2, 'Engineer'),
       (3, 'Manager'),
       (4, 'Senior Staff');

insert into Department
values (1, 'IT'),
       (2, 'Finance');

insert into Employee
values (1, 'John',
        'Doe',
        '1989-05-10',
        '2005-04-12', 2),
       (2, 'Jane',
        'Doe',
        '1990-08-04',
        '2010-07-28', 4),
       (327678, 'Georgi',
        'Facello',
        '1953-09-02',
        '1986-06-26', 2),
       (327679, 'Bezalel',
        'Simmel',
        '1964-06-02',
        '1985-11-21', 4),
       (327680, 'Parto',
        'Bamford',
        '1959-12-03',
        '1986-08-28', 3),
       (327681, 'Chirstian',
        'Koblick',
        '1954-05-01',
        '1986-12-01', 3),
       (327682, 'Kyoichi',
        'Maliniak',
        '1955-01-21',
        '1989-09-12', 2),
       (327683, 'Anneke',
        'Preusig',
        '1953-04-20',
        '1989-06-02', 1),
       (327684, 'Tzvetan',
        'Zielinski',
        '1957-05-23',
        '1989-02-10', 1),
       (327685, 'Saniya',
        'Kalloufi',
        '1958-02-19',
        '1994-09-15', 1),
       (327686, 'Sumant',
        'Peac',
        '1952-04-19',
        '1985-02-18', 4),
       (327687, 'Duangkaew',
        'Piveteau',
        '1963-06-01',
        '1989-08-24', 4),
       (327688, 'Mary',
        'Sluis',
        '1953-11-07',
        '1990-01-22', 3),
       (327689, 'Patricio',
        'Bridgland',
        '1960-10-04',
        '1992-12-18', 1),
       (327690, 'Eberhardt',
        'Terkki',
        '1963-06-07',
        '1985-10-20', 4),
       (327691, 'Berni',
        'Genin',
        '1956-02-12',
        '1987-03-11', 1),
       (327692, 'Guoxiang',
        'Nooteboom',
        '1959-08-19',
        '1987-07-02', 3),
       (327693, 'Kazuhito',
        'Cappelletti',
        '1961-05-02',
        '1995-01-27', 4),
       (327694, 'Cristinel',
        'Bouloucos',
        '1958-07-06',
        '1993-08-03', 1),
       (327695, 'Kazuhide',
        'Peha',
        '1954-06-19',
        '1987-04-03', 4),
       (327696, 'Lillian',
        'Haddadi',
        '1953-01-23',
        '1999-04-30', 2),
       (327697, 'Mayuko',
        'Warwick',
        '1952-12-24',
        '1991-01-26', 1),
       (327698, 'Ramzi',
        'Erde',
        '1960-02-20',
        '1988-02-10', 4),
       (327699, 'Shahaf',
        'Famili',
        '1952-07-08',
        '1995-08-22', 1),
       (327700, 'Bojan',
        'Montemayor',
        '1953-09-29',
        '1989-12-17', 2),
       (327701, 'Suzette',
        'Pettey',
        '1958-09-05',
        '1997-05-19', 3),
       (327702, 'Prasadram',
        'Heyers',
        '1958-10-31',
        '1987-08-17', 4),
       (327703, 'Yongqiao',
        'Berztiss',
        '1953-04-03',
        '1995-03-20', 4),
       (327704, 'Divier',
        'Reistad',
        '1962-07-10',
        '1989-07-07', 1),
       (327705, 'Domenick',
        'Tempesti',
        '1963-11-26',
        '1991-10-22', 1),
       (327706, 'Otmar',
        'Herbst',
        '1956-12-13',
        '1985-11-20', 2),
       (327707, 'Elvis',
        'Demeyer',
        '1958-07-14',
        '1994-02-17', 4),
       (327708, 'Karsten',
        'Joslin',
        '1959-01-27',
        '1991-09-01', 4),
       (327709, 'Jeong',
        'Reistad',
        '1960-08-09',
        '1990-06-20', 1),
       (327710, 'Arif',
        'Merlo',
        '1956-11-14',
        '1987-03-18', 2),
       (327711, 'Bader',
        'Swan',
        '1962-12-29',
        '1988-09-21', 4),
       (327712, 'Alain',
        'Chappelet',
        '1953-02-08',
        '1988-09-05', 4),
       (327713, 'Adamantios',
        'Portugali',
        '1959-08-10',
        '1992-01-03', 3),
       (327714, 'Pradeep',
        'Makrucki',
        '1963-07-22',
        '1990-12-05', 1),
       (327715, 'Huan',
        'Lortz',
        '1960-07-20',
        '1989-09-20', 2),
       (327716, 'Alejandro',
        'Brender',
        '1959-10-01',
        '1988-01-19', 2),
       (327717, 'Weiyi',
        'Meriste',
        '1959-09-13',
        '1993-02-14', 2),
       (327718, 'Uri',
        'Lenart',
        '1959-08-27',
        '1989-11-12', 1),
       (327719, 'Magy',
        'Stamatiou',
        '1956-02-26',
        '1993-03-21', 2),
       (327720, 'Yishay',
        'Tzvieli',
        '1960-09-19',
        '1990-10-20', 2),
       (327721, 'Mingsen',
        'Casley',
        '1961-09-21',
        '1994-05-21', 1),
       (327722, 'Moss',
        'Shanbhogue',
        '1957-08-14',
        '1989-09-02', 2),
       (327723, 'Lucien',
        'Rosenbaum',
        '1960-07-23',
        '1992-06-20', 1),
       (327724, 'Zvonko',
        'Nyanchama',
        '1952-06-29',
        '1989-03-31', 1),
       (327725, 'Florian',
        'Syrotiuk',
        '1963-07-11',
        '1985-02-24', 2),
       (327726, 'Basil',
        'Tramer',
        '1961-04-24',
        '1992-05-04', 3),
       (327727, 'Yinghua',
        'Dredge',
        '1958-05-21',
        '1990-12-25', 3),
       (327728, 'Hidefumi',
        'Caine',
        '1953-07-28',
        '1992-10-15', 3),
       (327729, 'Heping',
        'Nitsch',
        '1961-02-26',
        '1988-05-21', 3),
       (327730, 'Sanjiv',
        'Zschoche',
        '1954-09-13',
        '1986-02-04', 1),
       (327731, 'Mayumi',
        'Schueller',
        '1957-04-04',
        '1995-03-13', 1),
       (327732, 'Georgy',
        'Dredge',
        '1956-06-06',
        '1992-04-27', 1),
       (327733, 'Brendon',
        'Bernini',
        '1961-09-01',
        '1990-02-01', 2),
       (327734, 'Ebbe',
        'Callaway',
        '1954-05-30',
        '1992-01-15', 1),
       (327735, 'Berhard',
        'McFarlin',
        '1954-10-01',
        '1987-04-13', 4),
       (327736, 'Alejandro',
        'McAlpine',
        '1953-09-19',
        '1991-06-26', 1),
       (327737, 'Breannda',
        'Billingsley',
        '1961-10-15',
        '1987-11-02', 3),
       (327738, 'Tse',
        'Herber',
        '1962-10-19',
        '1985-09-17', 1),
       (327739, 'Anoosh',
        'Peyn',
        '1961-11-02',
        '1991-08-30', 2),
       (327740, 'Gino',
        'Leonhardt',
        '1952-08-06',
        '1989-04-08', 4),
       (327741, 'Udi',
        'Jansch',
        '1959-04-07',
        '1985-11-20', 1),
       (327742, 'Satosi',
        'Awdeh',
        '1963-04-14',
        '1988-05-18', 2),
       (327743, 'Kwee',
        'Schusler',
        '1952-11-13',
        '1986-02-26', 3),
       (327744, 'Claudi',
        'Stavenow',
        '1953-01-07',
        '1987-03-04', 2),
       (327745, 'Charlene',
        'Brattka',
        '1962-11-26',
        '1987-08-07', 1),
       (327746, 'Margareta',
        'Bierman',
        '1960-09-06',
        '1989-11-05', 1),
       (327747, 'Reuven',
        'Garigliano',
        '1955-08-20',
        '1985-10-14', 3),
       (327748, 'Hisao',
        'Lipner',
        '1958-01-21',
        '1987-10-01', 1),
       (327749, 'Hironoby',
        'Sidou',
        '1952-05-15',
        '1988-07-21', 2),
       (327750, 'Shir',
        'McClurg',
        '1954-02-23',
        '1991-12-01', 2),
       (327751, 'Mokhtar',
        'Bernatsky',
        '1955-08-28',
        '1990-08-13', 3),
       (327752, 'Gao',
        'Dolinsky',
        '1960-03-09',
        '1987-03-19', 1),
       (327753, 'Erez',
        'Ritzmann',
        '1952-06-13',
        '1985-07-09', 3),
       (327754, 'Mona',
        'Azuma',
        '1964-04-18',
        '1990-03-02', 1),
       (327755, 'Danel',
        'Mondadori',
        '1959-12-25',
        '1987-05-26', 2),
       (327756, 'Kshitij',
        'Gils',
        '1961-10-05',
        '1986-03-27', 4),
       (327757, 'Premal',
        'Baek',
        '1957-12-03',
        '1985-11-19', 1),
       (327758, 'Zhongwei',
        'Rosen',
        '1960-12-17',
        '1986-10-30', 3),
       (327759, 'Parviz',
        'Lortz',
        '1963-09-09',
        '1990-01-03', 2),
       (327760, 'Vishv',
        'Zockler',
        '1959-07-23',
        '1987-03-31', 4),
       (327761, 'Tuval',
        'Kalloufi',
        '1960-05-25',
        '1995-12-15', 4),
       (327762, 'Kenroku',
        'Malabarba',
        '1962-11-07',
        '1994-04-09', 4),
       (327763, 'Somnath',
        'Foote',
        '1962-11-19',
        '1990-02-16', 4),
       (327764, 'Xinglin',
        'Eugenio',
        '1959-07-23',
        '1986-09-08', 2),
       (327765, 'Jungsoon',
        'Syrzycki',
        '1954-02-25',
        '1988-09-02', 2),
       (327766, 'Sudharsan',
        'Flasterstein',
        '1963-03-21',
        '1986-08-12', 1),
       (327767, 'Kendra',
        'Hofting',
        '1961-05-30',
        '1986-03-14', 1),
       (327768, 'Amabile',
        'Gomatam',
        '1955-10-04',
        '1992-11-18', 2),
       (327769, 'Valdiodio',
        'Niizuma',
        '1964-10-18',
        '1989-09-22', 1),
       (327770, 'Sailaja',
        'Desikan',
        '1964-06-11',
        '1996-11-05', 3),
       (327771, 'Arumugam',
        'Ossenbruggen',
        '1957-05-25',
        '1987-04-18', 1),
       (327772, 'Hilari',
        'Morton',
        '1965-01-03',
        '1986-07-15', 4),
       (327773, 'Jayson',
        'Mandell',
        '1954-09-16',
        '1990-01-14', 3),
       (327774, 'Remzi',
        'Waschkowski',
        '1952-02-27',
        '1990-09-15', 4),
       (327775, 'Sreekrishna',
        'Servieres',
        '1961-09-23',
        '1985-05-13', 2);

insert into Employee_Department
values (2, 1),
       (1, 2),
       (2, 327678),
       (2, 327679),
       (1, 327680),
       (2, 327681),
       (2, 327682),
       (1, 327683),
       (1, 327684),
       (1, 327685),
       (1, 327686),
       (1, 327687),
       (2, 327688),
       (1, 327689),
       (2, 327690),
       (1, 327691),
       (1, 327692),
       (1, 327693),
       (1, 327694),
       (2, 327695),
       (1, 327696),
       (1, 327697),
       (2, 327698),
       (1, 327699),
       (1, 327700),
       (2, 327701),
       (2, 327702),
       (2, 327703),
       (1, 327704),
       (2, 327705),
       (2, 327706),
       (1, 327707),
       (2, 327708),
       (2, 327709),
       (2, 327710),
       (2, 327711),
       (2, 327712),
       (1, 327713),
       (1, 327714),
       (2, 327715),
       (2, 327716),
       (2, 327717),
       (1, 327718),
       (1, 327719),
       (1, 327720),
       (2, 327721),
       (1, 327722),
       (1, 327723),
       (1, 327724),
       (1, 327725),
       (2, 327726),
       (2, 327727),
       (1, 327728),
       (1, 327729),
       (2, 327730),
       (2, 327731),
       (2, 327732),
       (1, 327733),
       (1, 327734),
       (1, 327735),
       (1, 327736),
       (1, 327737),
       (2, 327738),
       (1, 327739),
       (1, 327740),
       (2, 327741),
       (2, 327742),
       (2, 327743),
       (1, 327744),
       (2, 327745),
       (1, 327746),
       (2, 327747),
       (1, 327748),
       (2, 327749),
       (2, 327750),
       (2, 327751),
       (2, 327752),
       (1, 327753),
       (2, 327754),
       (1, 327755),
       (2, 327756),
       (1, 327757),
       (2, 327758),
       (2, 327759),
       (2, 327760),
       (1, 327761),
       (1, 327762),
       (1, 327763),
       (2, 327764),
       (1, 327765),
       (2, 327766),
       (1, 327767),
       (2, 327768),
       (1, 327769),
       (2, 327770),
       (1, 327771),
       (1, 327772),
       (2, 327773),
       (2, 327774),
       (2, 327775);

insert into Salary (id, employee_id, amount, from_date)
values (1, 1, 80244, '2005-04-12'),
       (2, 2, 58975, '2010-07-28'),
       (327678, 327678, 54145, '1986-06-26'),
       (327679, 327679, 93799, '1985-11-21'),
       (327680, 327680, 56562, '1986-08-28'),
       (327681, 327681, 51412, '1986-12-01'),
       (327682, 327682, 87374, '1989-09-12'),
       (327683, 327683, 82637, '1989-06-02'),
       (327684, 327684, 51062, '1989-02-10'),
       (327685, 327685, 57399, '1994-09-15'),
       (327686, 327686, 83809, '1985-02-18'),
       (327687, 327687, 96851, '1989-08-24'),
       (327688, 327688, 82828, '1990-01-22'),
       (327689, 327689, 73588, '1992-12-18'),
       (327690, 327690, 69455, '1985-10-20'),
       (327691, 327691, 76513, '1987-03-11'),
       (327692, 327692, 74198, '1987-07-02'),
       (327693, 327693, 91452, '1995-01-27'),
       (327694, 327694, 84669, '1993-08-03'),
       (327695, 327695, 98987, '1987-04-03'),
       (327696, 327696, 90929, '1999-04-30'),
       (327697, 327697, 57683, '1991-01-26'),
       (327698, 327698, 65629, '1988-02-10'),
       (327699, 327699, 55098, '1995-08-22'),
       (327700, 327700, 78603, '1989-12-17'),
       (327701, 327701, 77720, '1997-05-19'),
       (327702, 327702, 52795, '1987-08-17'),
       (327703, 327703, 80812, '1995-03-20'),
       (327704, 327704, 95675, '1989-07-07'),
       (327705, 327705, 85941, '1991-10-22'),
       (327706, 327706, 92679, '1985-11-20'),
       (327707, 327707, 55575, '1994-02-17'),
       (327708, 327708, 99837, '1991-09-01'),
       (327709, 327709, 82462, '1990-06-20'),
       (327710, 327710, 62798, '1987-03-18'),
       (327711, 327711, 66604, '1988-09-21'),
       (327712, 327712, 94625, '1988-09-05'),
       (327713, 327713, 73317, '1992-01-03'),
       (327714, 327714, 82709, '1990-12-05'),
       (327715, 327715, 93596, '1989-09-20'),
       (327716, 327716, 69854, '1988-01-19'),
       (327717, 327717, 68481, '1993-02-14'),
       (327718, 327718, 82844, '1989-11-12'),
       (327719, 327719, 58778, '1993-03-21'),
       (327720, 327720, 95357, '1990-10-20'),
       (327721, 327721, 50451, '1994-05-21'),
       (327722, 327722, 66185, '1989-09-02'),
       (327723, 327723, 79573, '1992-06-20'),
       (327724, 327724, 99311, '1989-03-31'),
       (327725, 327725, 57834, '1985-02-24'),
       (327726, 327726, 91240, '1992-05-04'),
       (327727, 327727, 82699, '1990-12-25'),
       (327728, 327728, 89777, '1992-10-15'),
       (327729, 327729, 50785, '1988-05-21'),
       (327730, 327730, 84597, '1986-02-04'),
       (327731, 327731, 70628, '1995-03-13'),
       (327732, 327732, 99349, '1992-04-27'),
       (327733, 327733, 84863, '1990-02-01'),
       (327734, 327734, 76270, '1992-01-15'),
       (327735, 327735, 76760, '1987-04-13'),
       (327736, 327736, 54992, '1991-06-26'),
       (327737, 327737, 94677, '1987-11-02'),
       (327738, 327738, 58413, '1985-09-17'),
       (327739, 327739, 58035, '1991-08-30'),
       (327740, 327740, 64935, '1989-04-08'),
       (327741, 327741, 50572, '1985-11-20'),
       (327742, 327742, 58056, '1988-05-18'),
       (327743, 327743, 88565, '1986-02-26'),
       (327744, 327744, 68656, '1987-03-04'),
       (327745, 327745, 77585, '1987-08-07'),
       (327746, 327746, 81959, '1989-11-05'),
       (327747, 327747, 77039, '1985-10-14'),
       (327748, 327748, 89321, '1987-10-01'),
       (327749, 327749, 65485, '1988-07-21'),
       (327750, 327750, 59465, '1991-12-01'),
       (327751, 327751, 50872, '1990-08-13'),
       (327752, 327752, 75964, '1987-03-19'),
       (327753, 327753, 77203, '1985-07-09'),
       (327754, 327754, 58123, '1990-03-02'),
       (327755, 327755, 59006, '1987-05-26'),
       (327756, 327756, 70664, '1986-03-27'),
       (327757, 327757, 76302, '1985-11-19'),
       (327758, 327758, 69520, '1986-10-30'),
       (327759, 327759, 68691, '1990-01-03'),
       (327760, 327760, 84899, '1987-03-31'),
       (327761, 327761, 68421, '1995-12-15'),
       (327762, 327762, 87408, '1994-04-09'),
       (327763, 327763, 81780, '1990-02-16'),
       (327764, 327764, 96674, '1986-09-08'),
       (327765, 327765, 88033, '1988-09-02'),
       (327766, 327766, 50141, '1986-08-12'),
       (327767, 327767, 86609, '1986-03-14'),
       (327768, 327768, 82621, '1992-11-18'),
       (327769, 327769, 53279, '1989-09-22'),
       (327770, 327770, 68534, '1996-11-05'),
       (327771, 327771, 82831, '1987-04-18'),
       (327772, 327772, 58555, '1986-07-15'),
       (327773, 327773, 94283, '1990-01-14'),
       (327774, 327774, 95751, '1990-09-15'),
       (327775, 327775, 95908, '1985-05-13');