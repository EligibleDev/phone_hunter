const loadData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=phone"
  );
  const data = await res.json();
  const phones = data.data;
  loadPhones(phones);
};

const loadPhones = async (phones) => {
  phones.forEach((phone) => {
    const phoneContainer = document.getElementById("phone-container");
    const phoneCard = document.createElement("div");
    phoneCard.innerHTML = `<div class="flex border border-[--secondary-black] rounded-lg flex-col justify-center items-center gap-5 p-6" >
                                <div class="flex p-8 justify-center bg-[--blue-bg] w-full h-full rounded-lg items-center" >
                                    <img class="w-56" src="${phone.image}" alt="" />
                                </div>

                                <h4 class="text-2xl font-semibold text-[--secondary-black]">${phone.phone_name}</h4>

                                <p class="text-lg text-[--text-color]">
                                    There are many variations of passages of available, but the majority have suffered
                                </p>

                                <h4 class="text-2xl font-semibold text-[--secondary-black]">$999</h4>

                                <button class="bg-[--primary-blue] text-white py-4 px-10 rounded-lg text-xl font-semibold" >
                                    Show Details
                                </button>
                            </div>`;
    phoneContainer.appendChild(phoneCard);
    console.log(phone);
  });
};

loadData();
