import AlertSign from "@component/alert/signIn";
import HeaderPhone from "@component/sidebar/header";
import Center from "@component/center";
import Header from "@component/header";
import Detail from "@component/detail";

import { authOptions } from "@auth/route";
import { getServerSession } from "next-auth";
import Link from "next/link";

import { Metadata } from "next";
import { getFavoriteMusic } from "@lib/api/getFavorite";
import { favoriteMetaData } from "@lib/metadata";

export const metadata: Metadata = favoriteMetaData

const FavoritePage = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return (
      <main className="md:w-[80%] w-full h-full bg-stone-900 md:rounded-2xl overflow-y-scroll pb-32">
        <Header />
        <AlertSign />
      </main>
    );
  }

  const listOfFavorite = await getFavoriteMusic({
    searchParams: [
      { key: "favorite", value: "favorite" },
      { key: "take", value: String(8) },
    ],
  });
  return (
    <main className="md:w-[80%] w-full h-full bg-stone-900 md:rounded-2xl overflow-y-scroll  pb-32">
      <HeaderPhone />

      {!listOfFavorite.length && (
        <Center className="flex-col">
          <h4 className="text-3xl text-stone-200 font-[700]">
            You don&apos;t have favorite song yet 🪹
          </h4>
          <Link
            href="/"
            className="bg-white w-[160px] text-black font-[700] text-xl rounded-full p-3 text-center capitalize"
          >
            See Music
          </Link>
        </Center>
      )}

      {listOfFavorite.length && (
        <Detail
          session={session}
          title="My Favorite"
          views={`${listOfFavorite.reduce(
            (a, b) => b.views + 0,
            0
          )} total views`}
          largeImage={listOfFavorite[0].largeImage}
          listOfMusic={listOfFavorite}
        />
      )}
    </main>
  );
};

export default FavoritePage;
