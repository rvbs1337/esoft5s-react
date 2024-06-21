"use client";
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import { Suspense } from 'react'
import CardSection from "@/components/CardSection/CardSection";

export default function Evolucoes() {
  const params = useSearchParams();
  const [parana, setparana] = useState<any>();

  useEffect(() => {
    const name = params.get("name");
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((data) => {
      return data.json()
    }
    ).then((data) => {
      setparana(data);
    })
  }, [name])

  console.log(parana)

  return (
    <Suspense>
      <CardSection titulo={parana?.name}>
        <img src={parana?.sprites.front_default} alt={parana?.name} />
      </CardSection>
    </Suspense>
  );
};
