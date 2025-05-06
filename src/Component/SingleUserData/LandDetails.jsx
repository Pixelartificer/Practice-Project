import React, { useState } from "react";

const deeds = [
  {
    buyer: "Md. Faysour Rahman Bhuiyan",
    seller: "Md. Harun ur Rashid & Other",
    deedNo: "12754",
    date: "7/30/2014",
    rsMutationNo: "534",
    deedValue: "2,000,000.00",
    rsDaagDetails: [
      { rsDaag: 614, perDeed: 8.0, perMutation: 8.0 },
      { rsDaag: 343, perDeed: 5.0, perMutation: 5.0 },
      { rsDaag: 203, perDeed: 6.0, perMutation: 6.0 }
    ]
  },
  {
    buyer: "Md. Karim Uddin",
    seller: "Abdul Jalil",
    deedNo: "12755",
    date: "8/15/2015",
    rsMutationNo: "540",
    deedValue: "1,500,000.00",
    rsDaagDetails: [
      { rsDaag: 343, perDeed: 4.0, perMutation: 4.0 },
      { rsDaag: 324, perDeed: 13.0, perMutation: 13.0 }
    ]
  },
  {
    buyer: "Ayesha Khatun",
    seller: "Rafiqul Islam",
    deedNo: "12756",
    date: "9/10/2016",
    rsMutationNo: "541",
    deedValue: "1,800,000.00",
    rsDaagDetails: [
      { rsDaag: 999, perDeed: 10.0, perMutation: 10.0 }
    ]
  }
];

const LandDetails = () => {
  const [searchDaag, setSearchDaag] = useState("");
  const [filteredDeeds, setFilteredDeeds] = useState(deeds);
  const [summary, setSummary] = useState([]);

  const handleSearch = () => {
    const daagNumbers = searchDaag
      .split(",")
      .map((daag) => daag.trim())
      .filter((daag) => daag.length > 0);

    if (daagNumbers.length === 0) {
      setFilteredDeeds(deeds);
      setSummary([]);
      return;
    }

    const matched = deeds.map((deed) => {
      const filteredDaagDetails = deed.rsDaagDetails.filter((detail) =>
        daagNumbers.includes(String(detail.rsDaag))
      );
      if (filteredDaagDetails.length > 0) {
        return { ...deed, rsDaagDetails: filteredDaagDetails };
      }
      return null;
    }).filter(Boolean);

    setFilteredDeeds(matched);

    // Summary Calculation
    const summaryMap = {};
    matched.forEach((deed) => {
      deed.rsDaagDetails.forEach((detail) => {
        const daag = detail.rsDaag;
        if (!summaryMap[daag]) {
          summaryMap[daag] = { perDeed: 0, perMutation: 0 };
        }
        summaryMap[daag].perDeed += detail.perDeed;
        summaryMap[daag].perMutation += detail.perMutation;
      });
    });

    const summaryArray = Object.entries(summaryMap).map(([daag, totals]) => ({
      rsDaag: daag,
      perDeed: totals.perDeed,
      perMutation: totals.perMutation
    }));

    setSummary(summaryArray);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchDaag(value);
    if (value.trim() === "") {
      setFilteredDeeds(deeds);
      setSummary([]);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">দাগ নাম্বার দিয়ে দলিল খুঁজুন</h1>
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="দাগ নাম্বার লিখুন (যেমন 343, 614)"
          value={searchDaag}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="border p-2 rounded w-64"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          খুঁজুন
        </button>
      </div>

      {filteredDeeds.length === 0 ? (
        <p className="text-red-500">কোনো দলিল পাওয়া যায়নি।</p>
      ) : (
        <>
          {/* Summary Table */}
          {summary.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">সারাংশ (মোট জমি প্রতি দাগ)</h2>
              <table className="w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-2 py-1">R.S. Daag</th>
                    <th className="border px-2 py-1">মোট জমি (দলিল অনুযায়ী)</th>
                    <th className="border px-2 py-1">মোট জমি (মিউটেশন অনুযায়ী)</th>
                  </tr>
                </thead>
                <tbody>
                  {summary.map((item, idx) => (
                    <tr key={idx} className="text-center">
                      <td className="border px-2 py-1">{item.rsDaag}</td>
                      <td className="border px-2 py-1">{item.perDeed.toFixed(2)}</td>
                      <td className="border px-2 py-1">{item.perMutation.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Deeds */}
          {filteredDeeds.map((deed, index) => (
            <div key={index} className="mb-6 border border-gray-300 rounded shadow p-4">
              <h2 className="text-lg font-semibold mb-2">
                দলিল নং: {deed.deedNo} | তারিখ: {deed.date}
              </h2>
              <p>ক্রেতা: {deed.buyer}</p>
              <p>বিক্রেতা: {deed.seller}</p>
              <p>মিউটেশন নং: {deed.rsMutationNo}</p>
              <p>দলিল মূল্য: {deed.deedValue} টাকা</p>

              <table className="mt-4 w-full border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-2 py-1">R.S. Daag</th>
                    <th className="border px-2 py-1">জমি (দলিল অনুযায়ী)</th>
                    <th className="border px-2 py-1">জমি (মিউটেশন অনুযায়ী)</th>
                  </tr>
                </thead>
                <tbody>
                  {deed.rsDaagDetails.map((detail, i) => (
                    <tr key={i} className="text-center">
                      <td className="border px-2 py-1">{detail.rsDaag}</td>
                      <td className="border px-2 py-1">{detail.perDeed.toFixed(2)}</td>
                      <td className="border px-2 py-1">{detail.perMutation.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default LandDetails;