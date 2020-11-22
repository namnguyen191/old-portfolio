// Countdown to event date
const countDown = (eleMonthsId, eleDaysId, EleHoursId, EleMinutesId, eDate) => {
  // Current date in ms
  const currentDate = new Date(Date.now());
  // Event date in ms
  const eventDate = eDate;
  // Remaining time to event date in ms
  const remainTime = eventDate - currentDate;

  // Number of months until the event
  const monthToMs = 30 * 24 * 60 * 60 * 1000;
  const months = Math.floor(remainTime / monthToMs);
  // Number of days until the event
  const dayToMs = 24 * 60 * 60 * 1000;
  const days = Math.floor((remainTime - months * monthToMs) / dayToMs);
  // Number of hours until the event
  const hourToMs = 60 * 60 * 1000;
  const hours = Math.floor(
    (remainTime - months * monthToMs - days * dayToMs) / hourToMs
  );
  // Number of minutes until the event
  const minuteToMs = 60 * 1000;
  const minutes = Math.floor(
    (remainTime - months * monthToMs - days * dayToMs - hours * hourToMs) /
      minuteToMs
  );

  document.getElementById(eleMonthsId).innerHTML = months.toLocaleString(
    'en-US',
    {
      minimumIntegerDigits: 2,
      useGrouping: false
    }
  );
  document.getElementById(eleDaysId).innerHTML = days.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  document.getElementById(EleHoursId).innerHTML = hours.toLocaleString(
    'en-US',
    { minimumIntegerDigits: 2, useGrouping: false }
  );
  document.getElementById(EleMinutesId).innerHTML = minutes.toLocaleString(
    'en-US',
    {
      minimumIntegerDigits: 2,
      useGrouping: false
    }
  );

  setTimeout(() => {
    countDown(eleMonthsId, eleDaysId, EleHoursId, EleMinutesId, eDate);
  }, 1000);
};

const scrollSpy = () => {
  let home = document.getElementById('home');
  let about = document.getElementById('about');
  let tracks = document.querySelector('#tracks');
  let schedule = document.querySelector('#schedule');
  let sponsors = document.querySelector('#sponsors');
  // let faq = document.querySelector('#faq');
  // let contact = document.querySelector('#contact');

  let links = document.querySelectorAll('.nav-link');
  let homeLink = document.querySelectorAll(`a[href='#home']`);
  let aboutLink = document.querySelectorAll(`a[href='#about']`);
  let tracksLink = document.querySelectorAll(`a[href='#tracks']`);
  let scheduleLink = document.querySelectorAll(`a[href='#schedule']`);
  let sponsorsLink = document.querySelectorAll(`a[href='#sponsors']`);
  // let faqLink = document.querySelectorAll(`a[href='#faq']`);
  // let contactLink = document.querySelectorAll(`a[href='#contact']`);

  window.addEventListener('scroll', () => {
    var windo = window.pageYOffset + 400;

    if ((windo >= home.offsetTop) & (windo < about.offsetTop)) {
      for (const link of links) {
        link.classList.remove('active');
      }
      homeLink[0].classList.add('active');
    }
    if ((windo >= about.offsetTop) & (windo < tracks.offsetTop)) {
      for (const link of links) {
        link.classList.remove('active');
      }
      aboutLink[0].classList.add('active');
    }
    if ((windo >= tracks.offsetTop) & (windo < schedule.offsetTop)) {
      for (const link of links) {
        link.classList.remove('active');
      }
      tracksLink[0].classList.add('active');
    }
    if ((windo >= schedule.offsetTop) & (windo < sponsors.offsetTop)) {
      for (const link of links) {
        link.classList.remove('active');
      }
      scheduleLink[0].classList.add('active');
    }
    // if ((windo >= sponsors.offsetTop) & (windo < faq.offsetTop)) {
    //   for (const link of links) {
    //     link.classList.remove('active');
    //   }
    //   sponsorsLink[0].classList.add('active');
    // }
    // if ((windo >= faq.offsetTop) & (windo < contact.offsetTop)) {
    //   for (const link of links) {
    //     link.classList.remove('active');
    //   }
    //   faqLink[0].classList.add('active');
    // }
    // if (windo >= contact.offsetTop) {
    //   for (const link of links) {
    //     link.classList.remove('active');
    //   }
    //   contactLink[0].classList.add('active');
    // }
    if (windo >= sponsors.offsetTop) {
      for (const link of links) {
        link.classList.remove('active');
      }
      sponsorsLink[0].classList.add('active');
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  countDown('months', 'days', 'hours', 'minutes', new Date(2021, 01, 13));
});

scrollSpy();

// Init AOS
AOS.init();