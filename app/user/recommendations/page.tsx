import React from "react";
import { HeaderTabs } from "../../_components/users/HeaderTabs/HeaderTabs";
import { NavbarNested } from "../../_components/users/NavBarNested/NavbarNested";
import CustomButton from "../../_components/Button";
import Link from "next/link";
import MatchOfTheDay from "../../_components/users/MatchOfTheDay/MatchOfTheDay";
import BookCardGrid from "../../_components/users/BookCardGrid/BookCardGrid";

const mockBook = {
  title: 'Fire and Blood',
  author: 'George R. R. Martin',
  genres: ['Fantasy', 'Adventure'],
  coverUrl: 'https://www.sttammanylibrary.org/wp-content/uploads/sites/44/2019/08/Fire_And_Blood-670x803.png',
  description: 'Fire and Blood begins their tale with the legendary Aegon the Conqueror, creator of the Iron Throne, and goes on to recount the generations of Targaryens who fought to hold that iconic seat, all the way up to the civil war that nearly tore their dynasty apart.',
  previewLink: 'https://www.goodreads.com/book/show/36504081-fire-blood',
  score: 4.5
}

const page = () => {
  return (
    <div className="space-y-10">
      {/* Match of the day */}
      <MatchOfTheDay {...mockBook}/>

      {/* Books List */}
      <BookCardGrid />
    </div>
  );
};

export default page;
