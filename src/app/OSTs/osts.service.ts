import { Injectable } from '@angular/core';

@Injectable()
export class OSTsService {
  constructor() {}

  getOsts() {
    return [
      {
        name: 'The Last of Us',
        composer: 'Gustavo Santaolalla',
        vedio_id:'X-swJqjzjCI',
        src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/acbe71cd-a3c9-46c3-b97d-b592c6f24b4d/de4c5mn-dcb40552-68cc-4eb0-8849-ed65180e9319.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FjYmU3MWNkLWEzYzktNDZjMy1iOTdkLWI1OTJjNmYyNGI0ZFwvZGU0YzVtbi1kY2I0MDU1Mi02OGNjLTRlYjAtODg0OS1lZDY1MTgwZTkzMTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iLoM9u-ahJs6WWlX6_NjLHfYYf7D987lMIghtXzye1E',
        length: 42,
      },

      {
        name: 'Read Dead Redemptopn 2',
        vedio_id:'McnMsFwZlvA',
        composer: 'Woody Jackson',
        src: 'https://i.scdn.co/image/ab67616d0000b273f337a21d945f44e802a1eb1d',
        length: 67,
      },
      {
        name: 'God of War',
        composer: 'Bear McCreary',
        vedio_id:'BQMXQSKoAtg',
        src: 'https://i.scdn.co/image/ab67616d0000b2736c4f3ce9e20910138b533079',
        length: 42,
      },
      {
        name: 'Elding Ring',
        vedio_id:'8k0QPEQxr24',
        composer: 'Yuka Kitamura',
        src: 'https://e.snmc.io/i/600/s/08ec376c399fa00d7096afb62a44b6c2/9862066/%E5%8C%97%E6%9D%91%E5%8F%8B%E9%A6%99-yuka-kitamura-elden-ring-Cover-Art.jpg',
        length: 42,
      },
    ];
  }
}
