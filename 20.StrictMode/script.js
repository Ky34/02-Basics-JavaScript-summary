// Strict mode - строгий режим, помогает отследить некоторые баги

'use strict';  // должен идти в начале кода

let hasCertificate = false;
const passExam = true;

if(passExam) hasCertificate = true;
if(hasCertificate) console.log('WOW!');

const interface = 'Video';  // зарезервированные слова
const package = 'My package';