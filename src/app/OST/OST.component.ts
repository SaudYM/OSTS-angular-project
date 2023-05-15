import { Component, OnInit } from '@angular/core';
interface OST {
  name: string;
  composer: string;
  src: string;
}
@Component({
  selector: 'app-OST',
  templateUrl: './OST.component.html',
  styleUrls: ['./OST.component.css'],
})
export class OSTComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  OSTS: OST[] = [
    {
      name: 'the Last of Us',
      composer: 'Gustavo Santaolalla',
      src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/acbe71cd-a3c9-46c3-b97d-b592c6f24b4d/de4c5mn-dcb40552-68cc-4eb0-8849-ed65180e9319.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FjYmU3MWNkLWEzYzktNDZjMy1iOTdkLWI1OTJjNmYyNGI0ZFwvZGU0YzVtbi1kY2I0MDU1Mi02OGNjLTRlYjAtODg0OS1lZDY1MTgwZTkzMTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iLoM9u-ahJs6WWlX6_NjLHfYYf7D987lMIghtXzye1E',
    },

    {
      name: 'Read Dead redemptopn 2 ',
      composer: 'Woody Jackson',
      src: 'https://i.discogs.com/WrLtfmkd8hnPkNfyD0douLsR7R0OftVsNzvgV3SFRcs/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MDI2/ODQ4LTE1Njg2OTE2/MjMtOTIwMi5qcGVn.jpeg',
    },
  ];

  isShowing: boolean = true;
}
