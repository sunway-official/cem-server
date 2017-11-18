// eslint-disable-next-line no-extend-native
Date.prototype.addDays = days => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};

const today = new Date();

const conferences = [
  {
    title: 'Hoi nghi quoc te SigTelCom 2017',
    description:
      'International Conference on Recent Advances on Signal Processing, Telecommunications & Computing',
    start_date: today,
    end_date: today.addDays(3),
    bg_image: 'HoinghiquocteSigTelCom2017.png',
    organizer_detail_id: '1',
    address_id: '1',
    user_id: '6',
  },
  {
    title: 'Block Chain for Big Coin',
    description:
      'The practical consequence […is…] for the first time, a way for one Internet user to transfer a unique piece of digital property to another Internet user, such that the transfer is guaranteed to be safe and secure, everyone knows that the transfer has taken place, and nobody can challenge the legitimacy of the transfer. The consequences of this breakthrough are hard to overstate.',
    start_date: today,
    end_date: today.addDays(3),
    bg_image: 'HoinghiCDIOvungchauA2017.png',
    organizer_detail_id: '2',
    address_id: '2',
    user_id: '2',
  },
  {
    title: 'Hoi nghi Sinh viên ASEAN 2018',
    description: 'P2A – Passage to ASEAN ',
    start_date: today,
    end_date: today.addDays(3),
    bg_image: 'HoinghiSinhviênASEAN2016.png',
    organizer_detail_id: '3',
    address_id: '3',
    user_id: '3',
  },
  {
    title: 'Hoi nghi Quan he hop tac giua DTU voi cong dong doanh nghiep',
    description:
      'Phat trien Quan he hop tac giua DTU voi cong dong doanh nghiep ',
    start_date: today,
    end_date: today.addDays(3),
    bg_image: 'QuanhehoptacgiuaDTUvoicongdongdoanhnghiep.png',
    organizer_detail_id: '4',
    address_id: '4',
    user_id: '4',
  },
  {
    title: 'Hoi nghi Nghien cuu khoa hoc sinh vien Duy Tan',
    description:
      'Encourage more students to dedicate themselves to scientific research. If we succeed in doing this, a new era will open up for us in the 21st century',
    start_date: today,
    end_date: today.addDays(3),
    bg_image: 'QuanhehoptacgiuaDTUvoicongdongdoanhnghiep.png',
    organizer_detail_id: '5',
    address_id: '5',
    user_id: '5',
  },
  {
    title: 'Hoi nghi Cac truong dai hoc ngoai cong lap',
    description:
      'Muc dich: tim cac giai phap phat trien he thong giao duc ngoai cong lap mot cach ben vung ',
    start_date: today,
    end_date: today.addDays(3),
    bg_image: 'HoinghiCactruongdaihocngoaiconglap.png',
    organizer_detail_id: '6',
    address_id: '7',
    user_id: '6',
  },
];

module.exports = conferences;
