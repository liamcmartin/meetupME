 export const fetchMeetups = () =>
    fetch('http://192.168.0.4:3000/api/meetups')
        .then(res => res.json());
        