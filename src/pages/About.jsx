import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-300 px-6 py-12">
<div className="max-w-5xl mx-auto">

    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        About ClothSwap
      </h1>

      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        ClothSwap is a clothing exchange platform that
        helps people exchange clothes, reduce textile
        waste, and promote sustainable fashion.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md p-8 mb-8">
      <h2 className="text-2xl font-bold mb-4">
        Our Mission
      </h2>

      <p className="text-gray-600 leading-7">
        Our mission is to encourage the reuse of clothing
        by connecting people who want to exchange their
        unused garments. We aim to make fashion more
        sustainable, affordable, and environmentally friendly.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md p-8 mb-8">
      <h2 className="text-2xl font-bold mb-4">
        What We Offer
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700">
        <li>Browse available clothing listings.</li>
        <li>View clothing details and availability.</li>
        <li>Create listings and request clothing swaps.</li>
        <li>Chat with users and negotiate swap values.</li>
        <li>Manage and review swap requests through the admin panel.</li>
      </ul>
    </div>

    <div className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-2xl font-bold mb-4">
        Why ClothSwap?
      </h2>

      <p className="text-gray-700 leading-7">
        Instead of letting unused clothes go to waste,
        ClothSwap gives garments another opportunity to
        be used. By exchanging clothes, users can discover
        new styles while helping reduce unnecessary
        clothing waste.
      </p>
    </div>

  </div>
</div>


  )
}
