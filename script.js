
const topics = {
  algorithms: {title:'Алгоритмы', icon:'⚙️'},
  logic: {title:'Логика', icon:'🧠'},
  tables: {title:'Анализ таблицы', icon:'📊'},
  search: {title:'Запросы для поисковых систем', icon:'🔎'},
  codingInfo: {title:'Кодирование информации', icon:'💾'},
  codingDecode: {title:'Кодирование и декодирование', icon:'🔐'},
  programming: {title:'Программирование', icon:'💻'},
  technologies: {title:'Информационные технологии', icon:'🌐'},
  schemes: {title:'Анализ схемы', icon:'🗺️'},
  numberSystems: {title:'Система счисления', icon:'🔢'}
};

const graphTables = [
[['','A','B','C','D','E'],['A','','2','9','4',''],['B','2','','3','','5'],['C','9','3','','6','10'],['D','4','','6','','8'],['E','','5','10','8','']],
[['','A','B','C','D','E'],['A','','2','1','','1'],['B','2','','','1',''],['C','1','','','2','2'],['D','','1','2','','1'],['E','1','','2','1','']],
[['','A','B','C','D','E'],['A','','1','4','3','7'],['B','1','','2','5',''],['C','4','2','','3',''],['D','3','5','3','','2'],['E','7','','','2','']],
[['','A','B','C','D','E'],['A','','5','9','6','9'],['B','5','','','4',''],['C','9','','','2','2'],['D','6','4','2','','5'],['E','9','','2','5','']],
[['','A','B','C','D','E'],['A','','2','','','1'],['B','2','','5','','4'],['C','','5','','3','3'],['D','','','3','','4'],['E','1','4','3','4','']],
[['','A','B','C','D','E'],['A','','4','','12',''],['B','4','','9','1','2'],['C','','9','','2','2'],['D','12','1','2','','1'],['E','','2','2','1','']],
[['','A','B','C','D','E','F'],['A','','2','','3','','6'],['B','2','','1','','2',''],['C','','1','','2','','2'],['D','3','','2','','1','1'],['E','','2','','1','',''],['F','6','','2','1','','']],
[['','A','B','C','D','E','F'],['A','','10','','3','',''],['B','10','','','10','2','1'],['C','','','','2','','4'],['D','3','10','2','','4',''],['E','','2','','4','',''],['F','','1','4','','','']],
[['','A','B','C','D','E','F'],['A','','3','5','9','','17'],['B','3','','','4','',''],['C','5','','','4','',''],['D','9','4','4','','6','4'],['E','','','','6','','6'],['F','17','','','4','6','']],
[['','A','B','C','D','E','F'],['A','','1','','3','5','5'],['B','','','6','','','7'],['C','','6','','4','3',''],['D','3','','4','','','4'],['E','6','','3','','',''],['F','5','7','','4','','']]
];

const searchTables = [
[['Запрос','Найдено страниц (тыс.)'],['Угол | Прямая','180'],['Угол','60'],['Прямая','140']],
[['Запрос','Найдено страниц (тыс.)'],['Крейсер | Линкор','3700'],['Крейсер & Линкор','400'],['Линкор','1800']],
[['Запрос','Найдено страниц (тыс.)'],['Швеция','3200'],['Финляндия','2300'],['Швеция & Финляндия','100']],
[['Запрос','Найдено страниц (тыс.)'],['Пушкин | Лермонтов','4500'],['Пушкин','3500'],['Лермонтов','2000']],
[['Запрос','Количество страниц (тыс.)'],['фрегат & эсминец','500'],['фрегат','2000'],['эсминец','2500']],
[['Запрос','Количество страниц (тыс.)'],['фрегат & эсминец','500'],['фрегат | эсминец','4500'],['эсминец','2500']],
[['Запрос','Количество страниц (тыс.)'],['крейсер | линкор','7000'],['крейсер','4800'],['линкор','4500']],
[['Запрос','Количество страниц (тыс.)'],['шахматы | теннис','7770'],['теннис','5500'],['шахматы & теннис','1000']],
[['Запрос','Количество страниц (тыс.)'],['фрегат | эсминец','3000'],['фрегат','2000'],['эсминец','2500']],
[['Запрос','Найдено страниц (тыс.)'],['Сириус & Вега','260'],['Вега & (Сириус | Арктур)','467'],['Сириус & Вега & Арктур','119']]
];

function tableHtml(data, className='') {
  return `<table class="task-table ${className}">${data.map((row,ri)=>`<tr>${row.map(c=>`${ri===0?'<th>':'<td>'}${String(c).replace(/</g,'&lt;').replace(/>/g,'&gt;')}${ri===0?'</th>':'</td>'}`).join('')}</tr>`).join('')}</table>`;
}

const tasks = {
algorithms: [
['Задача 1. У исполнителя две команды: 1) прибавь 1; 2) умножь на k (k — неизвестное натуральное число, k ≥ 2). Программа 111211 переводит число 64 в число 203. Определите значение k.','3'],
['Задача 2. У исполнителя три команды: 1) прибавь 1; 2) прибавь 2; 3) прибавь s. Программа 3123312 переводит число 18 в число 69. Определите значение s.','15'],
['Задача 3. У исполнителя команды: 1) прибавь b; 2) умножь на 2. Программа 11211 переводит число 12 в число 54. Определите значение b.','5'],
['Задача 4. У исполнителя: 1) вычти 3; 2) возведи в квадрат. Составьте алгоритм получения из числа 4 числа 49, содержащий не более 5 команд. Запишите номера команд.','21112'],
['Задача 5. У исполнителя: 1) вычти 3; 2) умножь на 2. Составьте алгоритм получения из числа 3 числа 18, содержащий не более 4 команд. Запишите номера команд.','2212'],
['Задача 6. У исполнителя: 1) прибавь 1; 2) умножь на b. Программа 1121111211 переводит число 6 в число 82. Определите b.','10'],
['Задача 7. У исполнителя Альфа: 1) прибавь 2; 2) раздели на b (b ≥ 2). Программа 11211 переводит число 50 в число 22. Определите b.','3'],
['Задача 8. У исполнителя Квадратор: 1) возведи в квадрат; 2) прибавь 1. Составьте алгоритм получения из числа 2 числа 27, содержащий не более 5 команд.','12122'],
['Задача 9. У исполнителя Альфа: 1) прибавь 1; 2) умножь на b (b ≥ 2). Программа 11211 переводит число 6 в число 82. Определите b.','10'],
['Задача 10. У исполнителя Сигма: 1) прибавь 1; 2) раздели на b (b ≥ 2). Программа 12111 переводит число 50 в число 20. Определите b.','3']
],
logic: [
['1. Напишите натуральное число x, для которого ложно высказывание: НЕ (x < 8) ИЛИ (x < 7).','7'],
['2. Напишите наибольшее трёхзначное число x, для которого истинно: НЕ (первая цифра нечётная) И НЕ (x делится на 3).','899'],
['3. Напишите наибольшее натуральное число x, для которого истинно: НЕ (x < 10) И (x < 11) И (x > 8).','10'],
['4. Определите наименьшее натуральное число x, для которого истинно: (НЕ (x ≥ 15) И НЕ (x < 8)) И (x нечётное).','9'],
['5. Определите количество натуральных двузначных чисел x, для которых ложно: НЕ (x чётное) И НЕ (x > 39).','75'],
['7. Напишите наименьшее двузначное число, большее 54, для которого ложно: (Число < 40) ИЛИ НЕ (Число чётное).','56'],
['8. Напишите наименьшее натуральное число x, для которого ложно: (x = 2) ИЛИ НЕ (x < 3).','1'],
['9. Определите наибольшее натуральное двузначное число x, для которого ложно: (x чётное) ИЛИ НЕ (x > 92).','99'],
['10. Определите наибольшее натуральное число x, для которого истинно: НЕ ((x ≥ 23) ИЛИ (x < 18)).','22']
],
tables: [
['1. Определите длину кратчайшего пути между A и E, проходящего через C. Дважды передвигаться по любой из дорог нельзя.', '15', graphTables[0]],
['2. Определите длину кратчайшего пути между A и B, проходящего через D.', '3', graphTables[1]],
['3. Определите длину кратчайшего пути между A и E, проходящего через C. Два раза посещать один пункт нельзя.', '8', graphTables[2]],
['4. Определите длину кратчайшего пути между A и E, проходящего через D.', '10', graphTables[3]],
['5. Определите длину кратчайшего пути между B и D. Каждый пункт можно посетить только один раз.', '7', graphTables[4]],
['6. Определите длину кратчайшего простого пути между A и D, проходящего через C.', '10', graphTables[5]],
['7. Определите длину кратчайшего простого пути между A и E, проходящего через F.', '7', graphTables[6]],
['8. Определите длину кратчайшего простого пути между A и F, проходящего через B.', '10', graphTables[7]],
['9. Определите длину кратчайшего пути между A и F, проходящего через E и не проходящего через B.', '21', graphTables[8]],
['10. Определите длину кратчайшего пути между A и B.', '12', graphTables[9]]
].map(x=>({text:x[0],answer:x[1],table:x[2]})),
search: [
['1. Какое количество страниц (в тысячах) будет найдено по запросу «Угол & Прямая»?','20',searchTables[0]],
['2. Какое количество страниц (в тысячах) будет найдено по запросу «Крейсер»?','2300',searchTables[1]],
['3. Какое количество страниц (в тысячах) будет найдено по запросу «Швеция | Финляндия»?','5400',searchTables[2]],
['4. Какое количество страниц (в тысячах) будет найдено по запросу «Пушкин & Лермонтов»?','1000',searchTables[3]],
['5. Сколько страниц (в тысячах) будет найдено по запросу «фрегат | эсминец»?','4000',searchTables[4]],
['6. Сколько страниц (в тысячах) будет найдено по запросу «фрегат»?','3500',searchTables[5]],
['7. Сколько страниц (в тыс.) будет найдено по запросу «крейсер & линкор»?','2300',searchTables[6]],
['8. Сколько страниц (в тысячах) будет найдено по запросу «шахматы»?','3270',searchTables[7]],
['9. Сколько страниц (в тысячах) будет найдено по запросу «фрегат & эсминец»?','1500',searchTables[8]],
['10. Какое количество страниц (в тысячах) будет найдено по запросу «Вега & Арктур»?','326',searchTables[9]]
].map(x=>({text:x[0],answer:x[1],table:x[2]})),

codingInfo: [
['1. В кодировке Unicode каждый символ кодируется 8 битами. В тексте перечислены домашние животные. После добавления названия ещё одного животного и необходимых запятых и пробелов размер увеличился на 7 байт. Определите длину добавленного названия животного в символах.','5'],
['2. В кодировке Unicode каждый символ кодируется 16 битами. Из списка диких животных удалили одно название и ставшие лишними запятые и пробелы. Размер уменьшился на 18 байт. Какое название удалили?','носорог'],
['3. В UTF-32 каждый символ кодируется 32 битами. Из списка народов удалили одно название и ставшие лишними знаки. Размер уменьшился на 32 байта. Какое название удалили?','кереки'],
['4. В кодировке Unicode каждый символ кодируется 16 битами. Из списка цветов удалили одно название и ставшие лишними знаки. Размер уменьшился на 12 байт. Какое название удалили?','алый'],
['5. В кодировке Unicode каждый символ кодируется 16 битами. Из списка городов удалили одно название и ставшие лишними знаки. Размер уменьшился на 22 байта. Какой город удалили?','Соликамск'],
['6. Каждый символ кодируется 2 байтами. Из списка стран Африки удалили два названия и ставшие лишними знаки. Размер уменьшился на 176 бит. Запишите самое короткое из зачёркнутых названий.','Чад'],
['7. В кодировке КОИ-8 каждый символ кодируется 8 битами. После добавления названия реки и необходимых знаков размер увеличился на 5 байт. Определите длину добавленного названия реки в символах.','3'],
['8. В кодировке Unicode каждый символ кодируется 16 битами. Из списка овощей удалили одно название и ставшие лишними запятую и пробел. Размер уменьшился на 12 байт. Какой овощ удалили?','репа'],
['9. В кодировке КОИ-8 каждый символ кодируется 8 битами. Из списка героев мультфильмов удалили имя и лишние запятую и пробел. Размер уменьшился на 13 байт. Какое имя удалили?','Малефисента'],
['10. В кодировке КОИ-8 каждый символ кодируется 8 битами. Одно слово записали два раза подряд, поставив между одинаковыми словами один пробел. Размер увеличился на 14 байт. Какое слово лишнее?','Нетерпеливого']
],
codingDecode: [
['1. Сообщение: 10001010001000011. Таблица кодов: А=011, И=001, К=11, Л=10, С=010, Ц=000. Расшифруйте пароль.','Лисица',20],
['2. Сообщение: 1001100110111100. Таблица кодов: А=101, Д=01, Н=110, О=100, Р=00, Т=111. Расшифруйте пароль.','Ондатра',21],
['3. Сообщение: 0011100110000010011. Таблица кодов: А=011, Е=000, И=11, М=010, С=001, Т=10. Расшифруйте пароль.','Система',22],
['4. Сообщение: 1110010000100000111000. Таблица кодов: А=01, Б=100, К=101, Л=10, Й=111, Я=000. Расшифруйте пароль.','Балалайка',23],
['5. Коды букв даны в таблице. Даны цепочки: 1010110; 100000101; 00011110001. Найдите цепочку, которая имеет только одну расшифровку, и запишите расшифрованное слово.','СОДА',24],
['6. Коды букв даны в таблице. Даны цепочки: 100101000; 100000101; 0110001. Найдите цепочку, которая имеет только одну расшифровку, и запишите расшифрованное слово.','АДА',24],
['7. Передана радиограмма азбукой Морзе: • • – • • • – • – – • – • • • • –. Использовались только буквы из таблицы Морзе. Определите текст радиограммы.','УЖАТАХТ',25],
['8. Вася и Петя использовали собственный шифр. Таблица: А=~, Б=#, В=#+, Г=+~#, Д=+#, Е=~#. Сообщение: # ~ # + + ~ #. Расшифруйте его.','БАВГ',26],
['9. Коды букв: А=01, Д=100, К=101, Н=10, О=111, С=000. Даны цепочки: 10111101; 00011110; 100111101. Найдите ту, которая имеет только одну расшифровку, и запишите слово.','СОН',27],
['10. Коды букв: А=01, В=011, Д=100, О=111, Р=010, У=001. Даны цепочки: 01001001; 11101001; 10001010. Найдите ту, которая имеет только одну расшифровку, и запишите слово.','ДАР',28]
].map(x=>({text:x[0],answer:x[1],codeTable:x[2]})),
programming: [
['1. Программа проверяет: s > 8 ИЛИ t > 8. Для запусков (8,8); (9,6); (4,7); (6,6); (−9,−2); (−5,9); (−10,10); (6,9); (10,6). Сколько запусков напечатали YES?','5',29],
['2. Программа проверяет НЕ (s ≥ 2 И t < 5). Для запусков (12,5); (5,3); (−4,1); (2,−5); (5,−7); (10,3); (18,6); (3,0); (2,5). Сколько запусков напечатали YES?','4',30],
['3. Программа проверяет s > A ИЛИ t > 12. Для данных (13,2); (11,12); (−12,12); (2,−2); (−10,−10); (6,−5); (2,8); (9,10); (1,13). Найдите наименьшее целое A, при котором YES напечатается 3 раза.','9',31],
['4. Программа проверяет s < 5 И НЕ(t > 3). Для данных (2,−2); (−2,4); (4,1); (−12,5); (0,−7); (1,3); (8,2); (3,0); (23,1). Сколько запусков напечатали NO?','4',32],
['5. Программа проверяет s > A ИЛИ t > 12. Для данных (1,2); (11,2); (1,12); (11,12); (−11,−12); (−11,12); (−12,11); (10,10); (10,5). Найдите наименьшее целое A, при котором NO напечатается 7 раз.','12',33],
['6. Программа проверяет s > A ИЛИ t > 12. Для данных (13,2); (11,12); (−12,12); (2,−2); (−10,−10); (6,−5); (2,8); (9,10); (1,13). Найдите наименьшее целое A, при котором YES напечатается 2 раза.','11',34],
['7. Программа проверяет s > 10 ИЛИ t > A. Для данных (1,2); (11,2); (1,12); (11,12); (−11,−12); (−11,12); (−12,11); (10,10); (10,5). Найдите наименьшее целое A, при котором YES напечатается 7 раз.','2',35],
['8. Программа проверяет s < 6 И k > 6. Для данных (1,11); (5,9); (8,−12); (6,6); (3,11); (−10,−12); (−10,11); (7,1); (−12,7). Сколько запусков напечатали YES?','5',36],
['9. Программа проверяет s > A ИЛИ t > 12. Для данных (13,2); (11,12); (−12,12); (2,−2); (−10,−10); (6,−5); (2,8); (9,10); (1,13). Сколько целых значений A дают YES ровно 4 раза?','9',37],
],
technologies: [
['1. Доступ к файлу karl.htm на сервере april.ru осуществляется по протоколу http. Фрагменты: 1) http; 2) karl; 3) /; 4) april; 5) .htm; 6) .ru; 7) ://. Запишите последовательность цифр.','1746325'],
['2. Доступ к файлу txt.com на сервере net.ru по протоколу http. Фрагменты: 1) /; 2) net; 3) .com; 4) ://; 5) .ru; 6) http; 7) txt.','6425173'],
['3. Доступ к photo.jpg на сервере mysite.ru по протоколу ftp. Фрагменты: 1) photo; 2) ftp; 3) /; 4) .jpg; 5) mysite; 6) ://; 7) .ru.','2657314'],
['4. Доступ к inf.docx на сервере teach.ru по протоколу ftp. Фрагменты: 1) teach; 2) ftp; 3) inf; 4) /; 5) ://; 6) .docx; 7) .ru.','2517436'],
['5. Доступ к img.bmp на сервере pic.kz по протоколу http. Фрагменты: 1) img; 2) /; 3) kz; 4) ://; 5) http; 6) .bmp; 7) pic. Запишите последовательность.','5473216'],
['6. Доступ к name.gif на сервере jour.com по протоколу ftp. Фрагменты: 1) .com; 2) ftp; 3) jour; 4) /; 5) ://; 6) .gif; 7) name.','2531476'],
['7. Доступ к spis.htm на сервере sch.net по протоколу ftp. Фрагменты: 1) ://; 2) spis; 3) .net; 4) .htm; 5) ftp; 6) sch; 7) /.','5163724'],
['8. Доступ к org.xls на сервере school.org по протоколу ftp. Фрагменты: 1) org.; 2) school; 3) /; 4) ://; 5) .org; 6) .xls; 7) ftp.','7425316'],
['9. Доступ к math.doc на сервере obr.ru по протоколу https. Фрагменты: 1) obr; 2) /; 3) .ru; 4) .doc; 5) ://; 6) math; 7) https.','7513264'],
['10. Доступ к rus.doc на сервере obr.org по протоколу https. Фрагменты: 1) obr.; 2) /; 3) org; 4) ://; 5) doc; 6) rus.; 7) https.','7413265']
],
schemes: [
['1. На рисунке схема дорог. По каждой дороге можно двигаться только в направлении стрелки. Сколько существует различных путей из города А в город К?','9','image2.png'],
['2. На рисунке схема дорог. Сколько существует различных путей из города A в город G?','7','image3.png'],
['3. Сколько существует различных путей из города А в город И, проходящих через город В?','12','image4.png'],
['4. Сколько существует различных путей из города А в город К, проходящих через город Д?','9','image5.png'],
['5. Сколько существует различных путей из города А в город И, проходящих через город В?','20','image6.png'],
['6. Сколько существует различных путей из города А в город И, проходящих через город Г?','14','image7.png'],
['7. Сколько существует различных путей из города А в город И, проходящих через город Ж?','17','image8.png'],
['8. Сколько существует различных путей из пункта А в пункт К, не проходящих через пункт В?','5','image9.png'],
['9. Сколько существует различных путей из пункта А в пункт К, не проходящих через пункт Е?','11','image10.png'],
['10. Сколько существует различных путей из города А в город М, проходящих через город Ж, но не проходящих через город К?','16','image11.png']
].map(x=>({text:x[0],answer:x[1],image:x[2]})),
numberSystems: [
['1. Переведите число 204 из десятичной системы счисления в двоичную.','11001100'],
['2. Переведите число 121 из десятичной системы в двоичную. Сколько единиц содержит полученное число?','5'],
['3. Переведите число 143 из десятичной системы в двоичную. Сколько значащих нулей содержит полученное число?','3'],
['4. Среди чисел 23₁₆, 32₈, 11110₂ найдите максимальное и запишите в десятичной системе.','35'],
['5. Среди чисел 50₁₆, 106₈, 1001010₂ найдите максимальное и запишите в десятичной системе.','80'],
['6. Вычислите: 10110101₂ + 245₈ + 1A₁₆.','372'],
['7. Вычислите: 111010₂ + 1257₈ + 3D₁₆.','806'],
['8. Вычислите: 101010₂ + 44₈ − 2C₁₆.','34'],
['9. Среди чисел 10110₁₀, 9110₁₀, 8010₁₀ найдите число, в двоичной записи которого наименьшее количество единиц. Запишите количество единиц.','2'],
['10. Среди чисел 12A₁₆, 142₅, 1101110₂ найдите максимальное нечётное и запишите в десятичной системе.','55']
]
};

// Добавляем таблицы кодирования/программирования по индексам из исходного документа.
const codeTables = {
20:[['А','И','К','Л','С','Ц'],['011','001','11','10','010','000']],
21:[['А','Д','Н','О','Р','Т'],['101','01','110','100','00','111']],
22:[['А','Е','И','М','С','Т'],['011','000','11','010','001','10']],
23:[['А','Д','К','Н','О','С'],['01','100','101','10','111','000']],
24:[['А','Д','К','Н','О','С'],['01','100','101','10','111','000']],
25:[['Т','А','У','Ж','Х'],['–','–','• –','• • –','• • • •']],
26:[['А','Б','В','Г','Д','Е'],['~','#','#+','+~#','+#','~#']],
27:[['А','Д','К','Н','О','С'],['01','100','101','10','111','000']],
28:[['А','В','Д','О','Р','У'],['01','011','100','111','010','001']]
};
const programTables = {
29:[[['Бейсик','Python'],['DIM s, t AS INTEGER\nINPUT s\nINPUT t\nIF s > 8 OR t > 8 THEN\n  PRINT "YES"\nELSE\n  PRINT "NO"\nENDIF','s = int(input())\nt = int(input())\nif s > 8 or t > 8:\n    print("YES")\nelse:\n    print("NO")']]],
30:[[['Алгоритмический язык','Паскаль'],['алг\nнач\nцел s, t\nввод s\nввод t\nесли не (s >= 2 и t < 5)\nто вывод "YES"\nиначе вывод "NO"\nвсе\nкон','var s, t: integer;\nbegin\nreadln(s); readln(t);\nif not((s >= 2) and (t < 5))\nthen writeln("YES")\nelse writeln("NO")\nend.']],[['Бейсик','Python'],['DIM s, t AS INTEGER\nINPUT s\nINPUT t\nIF NOT (s >= 2 AND t < 5) THEN\n PRINT "YES"\nELSE\n PRINT "NO"\nENDIF','s = int(input())\nt = int(input())\nif not ((s >= 2) and (t < 5)):\n print("YES")\nelse:\n print("NO")']]],
31:[[['Алгоритмический язык','Паскаль'],['алг\nнач\nцел s, t, A\nввод s\nввод t\nввод A\nесли s > A или t > 12\nто вывод "YES"\nиначе вывод "NO"\nвсе\nкон','var s, t, A: integer;\nbegin\nreadln(s); readln(t); readln(A);\nif (s > A) or (t > 12) then writeln("YES") else writeln("NO")\nend.']],[['Бейсик','Python'],['DIM s, t, A AS INTEGER\nINPUT s\nINPUT t\nINPUT A\nIF s > A OR t > 12 THEN\n PRINT "YES"\nELSE\n PRINT "NO"\nENDIF','s = int(input())\nt = int(input())\nA = int(input())\nif (s > A) or (t > 12):\n print("YES")\nelse:\n print("NO")']]],
32:[[['Алгоритмический язык','Паскаль'],['алг\nнач\nцел s, t\nввод s\nввод t\nесли s < 5 и не t > 3\nто вывод "YES"\nиначе вывод "NO"\nвсе\nкон','var s, t: integer;\nbegin\nreadln(s); readln(t);\nif (s < 5) and not (t > 3) then writeln("YES") else writeln("NO")\nend.']],[['Бейсик','Python'],['DIM s, t AS INTEGER\nINPUT s\nINPUT t\nIF s < 5 AND NOT t > 3 THEN\n PRINT "YES"\nELSE\n PRINT "NO"\nENDIF','s = int(input())\nt = int(input())\nif (s < 5) and not (t > 3):\n print("YES")\nelse:\n print("NO")']]],
33:[[['Алгоритмический язык','Паскаль'],['алг\nнач\nцел s, t, A\nввод s\nввод t\nввод A\nесли s > 10 или t > A\nто вывод "YES"\nиначе вывод "NO"\nвсе\nкон','var s, t, A: integer;\nbegin\nreadln(s); readln(t); readln(A);\nif (s > 10) or (t > A) then writeln("YES") else writeln("NO")\nend.']],[['Бейсик','Python'],['DIM s, t, A AS INTEGER\nINPUT s\nINPUT t\nINPUT A\nIF s > 10 OR t > A THEN\n PRINT "YES"\nELSE\n PRINT "NO"\nENDIF','s = int(input())\nt = int(input())\nA = int(input())\nif s > 10 or t > A:\n print("YES")\nelse:\n print("NO")']]],
34:31,
35:33,
36:[[['Алгоритмический язык','Паскаль'],['алг\nнач\nцел s, k\nввод s\nввод k\nесли s < 6 и k > 6\nто вывод "YES"\nиначе вывод "NO"\nвсе\nкон','var s, k: integer;\nbegin\nreadln(s); readln(k);\nif (s < 6) and (k > 6) then writeln("YES") else writeln("NO")\nend.']],[['Бейсик','Python'],['DIM k, s AS INTEGER\nINPUT s\nINPUT k\nIF s < 6 AND k > 6 THEN\n PRINT "YES"\nELSE\n PRINT "NO"\nEND IF','s = int(input())\nk = int(input())\nif s < 6 and k > 6:\n print("YES")\nelse:\n print("NO")']]],
37:31
};
function matrixCodeTable(n){
 const x=codeTables[n]; if(!x)return '';
 return tableHtml([x[0],x[1]]);
}
function programTable(n){
 const raw=programTables[n]; if(raw==null)return '';
 const x=typeof raw==='number' ? programTables[raw] : raw;
 return x.map(t=>tableHtml(t,'code-table')).join('');
}

// =============================
// СОХРАНЕНИЕ РЕЗУЛЬТАТОВ
// =============================
const STORAGE_RESULTS = 'ogeTrainerResults_v2';
const STORAGE_PROFILE = 'ogeTrainerStudent_v2';
const STORAGE_TEACHER = 'ogeTrainerTeacherSession_v2';
const TEACHER_LOGIN = 'teacher';
const TEACHER_PASSWORD = 'teacher123';

// Приводим задания из исходного набора к единому формату.
Object.keys(tasks).forEach(topicId => {
  tasks[topicId] = tasks[topicId].map(item => {
    if (!Array.isArray(item)) return item;
    return { text: item[0], answer: item[1], extra: item[2] };
  }).map(item => {
    if (item.extra && Array.isArray(item.extra)) item.table = item.extra;
    else if (typeof item.extra === 'number') item.codeTable = item.extra;
    else if (typeof item.extra === 'string' && /^image\d+\.(png|jpe?g)$/i.test(item.extra)) item.image = item.extra;
    return item;
  });
});

let currentTopic = null;
let timerInterval = null;
let timerSeconds = 0;
let attemptStartedAt = null;
let attemptLocked = false;

function getResults(){
  try { return JSON.parse(localStorage.getItem(STORAGE_RESULTS) || '[]'); }
  catch(e){ return []; }
}
function saveResults(data){ localStorage.setItem(STORAGE_RESULTS, JSON.stringify(data)); }
function getStudentProfile(){
  try { return JSON.parse(localStorage.getItem(STORAGE_PROFILE) || 'null'); }
  catch(e){ return null; }
}
function openStudentProfile(){
  const profile=getStudentProfile();
  const modal=document.getElementById('studentModal');
  if(profile){
    document.getElementById('studentName').value=profile.name;
    document.getElementById('studentClass').value=profile.klass;
  }
  document.getElementById('profileError').textContent='';
  modal.classList.remove('hidden');
  setTimeout(()=>document.getElementById('studentName').focus(),50);
}
function closeStudentProfile(){ document.getElementById('studentModal').classList.add('hidden'); }
function saveStudentProfile(){
  const name=document.getElementById('studentName').value.trim().replace(/\s+/g,' ');
  const klass=document.getElementById('studentClass').value.trim().replace(/\s+/g,' ');
  const err=document.getElementById('profileError');
  if(name.length<3 || klass.length<1){ err.textContent='⚠️ Укажите ФИО и класс ученика.'; return; }
  localStorage.setItem(STORAGE_PROFILE,JSON.stringify({name,klass}));
  err.textContent='';
  closeStudentProfile();
  prepareStudentArea();
}
function clearStudentProfile(){
  if(!confirm('Сменить ученика? Сохранённые результаты не удалятся.')) return;
  localStorage.removeItem(STORAGE_PROFILE);
  stopTimer(); currentTopic=null;
  document.getElementById('studentInfoBar').classList.add('hidden');
  document.getElementById('topicHint').classList.add('hidden');
  document.getElementById('topicGrid').classList.remove('hidden');
  document.getElementById('quizArea').classList.add('hidden');
  openStudentProfile();
}
function prepareStudentArea(){
  const profile=getStudentProfile();
  const bar=document.getElementById('studentInfoBar');
  if(!profile){
    bar.classList.add('hidden');
    document.getElementById('topicHint').classList.add('hidden');
    document.getElementById('topicGrid').classList.add('hidden');
    return;
  }
  bar.classList.remove('hidden');
  bar.innerHTML=`<span>👤 <b>${escapeHtml(profile.name)}</b>, ${escapeHtml(profile.klass)}</span><button class="mini-button" onclick="clearStudentProfile()">Сменить ученика</button>`;
  document.getElementById('topicHint').classList.remove('hidden');
  document.getElementById('topicGrid').classList.remove('hidden');
}
function escapeHtml(value){
  return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

function showSection(sectionId) {
  if(sectionId === 'teacher' && !sessionStorage.getItem(STORAGE_TEACHER)) return openTeacherLogin();
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
  if (sectionId === 'test') {
    prepareStudentArea();
    backToTopics();
    if(!getStudentProfile()) setTimeout(openStudentProfile,120);
  }
  if (sectionId === 'teacher') renderTeacherDashboard();
  window.scrollTo({top:0, behavior:'smooth'});
}

function renderTopics(){
  const grid=document.getElementById('topicGrid');
  grid.innerHTML=Object.entries(topics).map(([id,t])=>`<div class="topic-card" onclick="openTopic('${id}')"><h3>${t.icon} ${t.title}</h3><span>${tasks[id].length} ${tasks[id].length===1?'задание':'заданий'}</span></div>`).join('');
}

function openTopic(id){
  if(!getStudentProfile()){ openStudentProfile(); return; }
  stopTimer();
  currentTopic=id;
  attemptLocked=false;
  document.getElementById('topicGrid').classList.add('hidden');
  document.getElementById('topicHint').classList.add('hidden');
  document.getElementById('quizArea').classList.remove('hidden');
  document.getElementById('topicTitle').textContent=`${topics[id].icon} ${topics[id].title}`;
  document.getElementById('topicProgress').textContent=`Заданий: ${tasks[id].length} • Попытка №${getNextAttemptNumber(id)}`;
  document.getElementById('result').innerHTML='';
  document.getElementById('mistakes').innerHTML='';
  document.getElementById('mistakes').classList.add('hidden');
  const historyBox=document.getElementById('studentHistory');
  if(historyBox){ historyBox.innerHTML=''; historyBox.classList.add('hidden'); }
  document.getElementById('checkButton').disabled=false;
  createQuiz(id);
  startTimer();
  window.scrollTo({top:document.getElementById('test').offsetTop-10,behavior:'smooth'});
}
function backToTopics(){
  stopTimer();
  currentTopic=null;
  const grid=document.getElementById('topicGrid');
  const hint=document.getElementById('topicHint');
  if(grid) grid.classList.toggle('hidden', !getStudentProfile());
  if(hint) hint.classList.toggle('hidden', !getStudentProfile());
  document.getElementById('quizArea').classList.add('hidden');
  document.getElementById('result').innerHTML='';
  document.getElementById('mistakes').classList.add('hidden');
}
function createQuiz(id){
  const quiz=document.getElementById('quiz'); quiz.innerHTML='';
  tasks[id].forEach((item,i)=>{
    const q=document.createElement('div'); q.className='question';
    let html=`<h3>${escapeHtml(item.text)}</h3>`;
    if(item.table) html+=tableHtml(item.table);
    if(item.codeTable) html+=matrixCodeTable(item.codeTable);
    if(item.codeTable && item.codeTable>=29) html+=programTable(item.codeTable);
    if(item.image) html+=`<img class="task-image" src="assets/${item.image}" alt="Схема к заданию ${i+1}">`;
    html+=`<input class="answer-text" type="text" data-index="${i}" autocomplete="off" placeholder="Введите ответ">`;
    q.innerHTML=html; quiz.appendChild(q);
  });
}
function normalize(s){ return String(s).trim().toLowerCase().replace(/ё/g,'е').replace(/\s+/g,' '); }
function formatTime(seconds){
  const m=Math.floor(seconds/60).toString().padStart(2,'0');
  const s=(seconds%60).toString().padStart(2,'0');
  return `${m}:${s}`;
}
function startTimer(){
  timerSeconds=0; attemptStartedAt=Date.now();
  document.getElementById('timer').textContent='00:00';
  timerInterval=setInterval(()=>{
    timerSeconds++;
    document.getElementById('timer').textContent=formatTime(timerSeconds);
  },1000);
}
function stopTimer(){
  if(timerInterval){clearInterval(timerInterval);timerInterval=null;}
}
function getStudentKey(profile){ return normalize(profile.name)+'|'+normalize(profile.klass); }
function getNextAttemptNumber(topicId){
  const p=getStudentProfile(); if(!p) return 1;
  const key=getStudentKey(p);
  return getResults().filter(r=>r.studentKey===key && r.topic===topicId).length+1;
}
function checkAnswers(){
  if(!currentTopic || attemptLocked) return;
  const profile=getStudentProfile();
  const list=tasks[currentTopic];
  const inputs=document.querySelectorAll('#quiz .answer-text');
  let score=0, answered=0;
  const mistakes=[];
  list.forEach((item,i)=>{
    const value=inputs[i].value;
    if(value.trim()) answered++;
    const correct=normalize(value)===normalize(item.answer);
    if(correct) score++; else mistakes.push({number:i+1, user:value.trim(), correct:item.answer});
  });
  const result=document.getElementById('result');
  if(answered<list.length){
    result.className='result-warn';
    result.innerHTML=`⚠️ Ответьте на все задания. Заполнено: ${answered} из ${list.length}.`;
    return;
  }
  attemptLocked=true;
  stopTimer();
  const percent=Math.round(score/list.length*100);
  const attempt=getNextAttemptNumber(currentTopic);
  const record={
    id:Date.now().toString(36)+Math.random().toString(36).slice(2,7),
    studentKey:getStudentKey(profile),
    studentName:profile.name,
    studentClass:profile.klass,
    topic:currentTopic,
    topicTitle:topics[currentTopic].title,
    attempt,
    score,
    total:list.length,
    percent,
    timeSeconds:timerSeconds,
    time:formatTime(timerSeconds),
    date:new Date().toLocaleString('ru-RU'),
    timestamp:Date.now(),
    mistakes:mistakes.map(x=>x.number)
  };
  const all=getResults(); all.push(record); saveResults(all);
  const previous=all.filter(r=>r.studentKey===record.studentKey && r.topic===record.topic && r.timestamp<record.timestamp).sort((a,b)=>a.timestamp-b.timestamp).pop();
  const delta=previous ? percent-previous.percent : null;
  const message=percent>=80?'🏆 Отличный результат!':percent>=60?'👍 Хороший результат!':'📚 Рекомендуется повторить теорию и попробовать ещё раз.';
  result.className=percent>=60?'result-good':'result-warn';
  result.innerHTML=`${message}<br><br><b>Правильных ответов: ${score} из ${list.length}</b><br>Результат: ${percent}%<br>⏱️ Время: ${formatTime(timerSeconds)}${delta!==null?`<br>📈 Изменение относительно прошлой попытки: ${delta>0?'+':''}${delta} п.п.`:''}`;
  renderMistakes(mistakes);
  renderStudentHistory(currentTopic);
  document.getElementById('checkButton').disabled=true;
}
function renderStudentHistory(topicId){
  const box=document.getElementById('studentHistory');
  const profile=getStudentProfile();
  if(!box || !profile) return;
  const key=getStudentKey(profile);
  const rows=getResults().filter(r=>r.studentKey===key && r.topic===topicId).sort((a,b)=>a.timestamp-b.timestamp);
  if(!rows.length) return;
  const first=rows[0];
  const last=rows[rows.length-1];
  const delta=rows.length>1 ? last.percent-first.percent : null;
  box.classList.remove('hidden');
  box.innerHTML=`<h3>📈 История ваших попыток</h3>
    <p>Попыток выполнено: <b>${rows.length}</b></p>
    <div class="trend-line">${rows.map((r,i)=>`<span class="trend-point">${i+1}-я: ${r.percent}%</span>${i<rows.length-1?'<span class="trend-arrow">→</span>':''}`).join('')}</div>
    ${delta!==null?`<p><b>Изменение:</b> ${delta>0?'+':''}${delta} п.п. ${delta>0?'📈':delta<0?'📉':'➖'}</p>`:'<p class="muted">Это первая попытка по выбранному разделу.</p>'}`;
}
function renderMistakes(mistakes){
  const box=document.getElementById('mistakes');
  if(!mistakes.length){
    box.className='mistakes mistakes-good'; box.innerHTML='🎉 Ошибок нет. Все задания выполнены правильно!'; return;
  }
  box.className='mistakes';
  box.innerHTML=`<h3>❌ Ошибки</h3><p>Неверные ответы были в заданиях:</p><ul>${mistakes.map(x=>`<li><b>Задание №${x.number}</b>${x.user?` — ваш ответ: «${escapeHtml(x.user)}»`:''}</li>`).join('')}</ul>`;
}

// =============================
// КАБИНЕТ ПРЕПОДАВАТЕЛЯ
// =============================
function openTeacherLogin(){
  document.getElementById('teacherModal').classList.remove('hidden');
  document.getElementById('teacherPassword').value='';
  document.getElementById('teacherLoginError').textContent='';
  setTimeout(()=>document.getElementById('teacherPassword').focus(),50);
}
function closeTeacherLogin(){ document.getElementById('teacherModal').classList.add('hidden'); }
function doTeacherLogin(){
  const login=document.getElementById('teacherLogin').value.trim();
  const password=document.getElementById('teacherPassword').value;
  if(login===TEACHER_LOGIN && password===TEACHER_PASSWORD){
    sessionStorage.setItem(STORAGE_TEACHER,'1');
    closeTeacherLogin();
    document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
    document.getElementById('teacher').classList.add('active');
    renderTeacherDashboard();
    window.scrollTo({top:0,behavior:'smooth'});
  } else {
    document.getElementById('teacherLoginError').textContent='❌ Неверный логин или пароль.';
  }
}
function teacherLogout(){
  sessionStorage.removeItem(STORAGE_TEACHER);
  showSection('home');
}
function renderTeacherDashboard(){
  if(!sessionStorage.getItem(STORAGE_TEACHER)) return;
  const all=getResults();
  const classes=[...new Set(all.map(r=>r.studentClass).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'ru'));
  const classSelect=document.getElementById('classFilter');
  const oldClass=classSelect.value;
  classSelect.innerHTML='<option value="all">Все классы</option>'+classes.map(c=>`<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('');
  classSelect.value=classes.includes(oldClass)?oldClass:'all';
  const topicSelect=document.getElementById('topicFilter');
  const oldTopic=topicSelect.value;
  topicSelect.innerHTML='<option value="all">Все разделы</option>'+Object.entries(topics).map(([id,t])=>`<option value="${id}">${t.icon} ${escapeHtml(t.title)}</option>`).join('');
  topicSelect.value=Object.keys(topics).includes(oldTopic)?oldTopic:'all';
  const filtered=filterResults(all);
  const unique=[...new Set(filtered.map(r=>r.studentKey))];
  const first=filtered.filter(r=>r.attempt===1).length;
  const second=filtered.filter(r=>r.attempt===2).length;
  let improved=0, unchanged=0, decreased=0;
  const grouped={};
  filtered.forEach(r=>{ const k=r.studentKey+'|'+r.topic; (grouped[k]??=[]).push(r); });
  Object.values(grouped).forEach(arr=>{
    arr.sort((a,b)=>a.timestamp-b.timestamp);
    if(arr.length>=2){ const d=arr[1].percent-arr[0].percent; if(d>0) improved++; else if(d<0) decreased++; else unchanged++; }
  });
  const avg=filtered.length?Math.round(filtered.reduce((a,r)=>a+r.percent,0)/filtered.length):0;
  document.getElementById('teacherWelcome').textContent=`Всего сохранённых выполнений: ${all.length}. Данные хранятся в этом браузере.`;
  document.getElementById('teacherStats').innerHTML=`
    <div><strong>${unique.length}</strong><span>учеников</span></div>
    <div><strong>${first}</strong><span>первых попыток</span></div>
    <div><strong>${second}</strong><span>вторых попыток</span></div>
    <div><strong>${avg}%</strong><span>средний результат</span></div>
    <div><strong>${improved}</strong><span>улучшили результат</span></div>
    <div><strong>${unchanged}</strong><span>без изменений</span></div>
    <div><strong>${decreased}</strong><span>снизили результат</span></div>`;
  const rows=[...filtered].sort((a,b)=>b.timestamp-a.timestamp);
  if(!rows.length){
    document.getElementById('teacherTableWrap').innerHTML='<div class="empty-state">Пока нет сохранённых результатов.</div>';
  } else {
    document.getElementById('teacherTableWrap').innerHTML=`<div class="table-scroll"><table class="results-table"><thead><tr><th>ФИО</th><th>Класс</th><th>Раздел</th><th>Попытка</th><th>Результат</th><th>Время</th><th>Ошибки</th><th>Дата</th><th></th></tr></thead><tbody>${rows.map(r=>`<tr><td>${escapeHtml(r.studentName)}</td><td>${escapeHtml(r.studentClass)}</td><td>${escapeHtml(r.topicTitle)}</td><td>${r.attempt}</td><td><b>${r.percent}%</b></td><td>${r.time}</td><td>${r.mistakes.length}</td><td>${escapeHtml(r.date)}</td><td><button class="mini-button" onclick="showStudentDetails('${r.studentKey}')">Подробнее</button></td></tr>`).join('')}</tbody></table></div>`;
  }
  document.getElementById('studentDetails').classList.add('hidden');
}
function filterResults(all){
  const c=document.getElementById('classFilter').value;
  const t=document.getElementById('topicFilter').value;
  return all.filter(r=>(c==='all'||r.studentClass===c)&&(t==='all'||r.topic===t));
}
function showStudentDetails(studentKey){
  const all=getResults().filter(r=>r.studentKey===studentKey).sort((a,b)=>a.timestamp-b.timestamp);
  const box=document.getElementById('studentDetails');
  if(!all.length) return;
  const student=all[0];
  const byTopic={}; all.forEach(r=>(byTopic[r.topic]??=[]).push(r));
  const sections=Object.values(byTopic).map(arr=>{
    const title=arr[0].topicTitle;
    const points=arr.map(r=>`<span class="trend-point" title="Попытка ${r.attempt}: ${r.percent}%">${r.percent}%</span>`).join('<span class="trend-arrow">→</span>');
    const attemptRows=arr.map(r=>`<tr><td>${r.attempt}</td><td>${r.percent}%</td><td>${r.score}/${r.total}</td><td>${r.time}</td><td>${r.mistakes.length?`№ ${r.mistakes.join(', ')}`:'Нет'}</td><td>${escapeHtml(r.date)}</td></tr>`).join('');
    return `<div class="detail-topic"><h4>${escapeHtml(title)}</h4><div class="trend-line">${points}</div><div class="table-scroll"><table class="results-table compact"><thead><tr><th>Попытка</th><th>Результат</th><th>Баллы</th><th>Время</th><th>Ошибки</th><th>Дата</th></tr></thead><tbody>${attemptRows}</tbody></table></div></div>`;
  }).join('');
  box.classList.remove('hidden');
  box.innerHTML=`<div class="detail-head"><div><h3>👤 ${escapeHtml(student.studentName)}</h3><p class="muted">Класс: ${escapeHtml(student.studentClass)}</p></div><button class="back-button" onclick="document.getElementById('studentDetails').classList.add('hidden')">Закрыть</button></div>${sections}`;
  box.scrollIntoView({behavior:'smooth',block:'start'});
}
function exportResults(){
  const rows=filterResults(getResults());
  if(!rows.length){alert('Нет результатов для выгрузки.');return;}
  const header=['ФИО','Класс','Раздел','Попытка','Правильных','Всего','Результат %','Время','Ошибки','Дата'];
  const lines=[header,...rows.map(r=>[r.studentName,r.studentClass,r.topicTitle,r.attempt,r.score,r.total,r.percent,r.time,r.mistakes.length?`№ ${r.mistakes.join(', ')}`:'Нет',r.date])].map(row=>row.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(';')).join('\n');
  const blob=new Blob(['\uFEFF'+lines],{type:'text/csv;charset=utf-8;'});
  const url=URL.createObjectURL(blob); const a=document.createElement('a');
  a.href=url; a.download='rezultaty_trenazhera.csv'; a.click(); URL.revokeObjectURL(url);
}

// Если преподаватель уже входил в этой вкладке, кабинет доступен сразу.
if(sessionStorage.getItem(STORAGE_TEACHER)) document.getElementById('teacher').classList.remove('hidden');
prepareStudentArea();
renderTopics();
