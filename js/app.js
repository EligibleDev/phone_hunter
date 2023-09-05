const loadData = async (searchText, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  loadPhones(phones, isShowAll);
};

const loadPhones = async (phones, isShowAll) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = "";

  const showAllButton = document.getElementById("show-all");
  phones.length > 6 && !isShowAll
    ? showAllButton.classList.remove("hidden")
    : showAllButton.classList.add("hidden");

  const noData = document.getElementById('no-data');
  phones.length <= 0
    ? noData.classList.remove('hidden')
    : noData.classList.add('hidden');

  if (!isShowAll) {
    phones = phones.slice(0, 6)
  }

  phones.forEach((phone) => {
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
  });
};

const searchIt = (isShowAll) => {
  const search = document.getElementById("search");
  const searchText = search.value;
  loadData(searchText, isShowAll);
  document.getElementById('loader').classList.add('hidden');
};

const loader = () => {
  document.getElementById('loader').classList.remove('hidden');

  const noData = document.getElementById('no-data');
  noData.classList.add('hidden');

  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = "";

  const showAllButton = document.getElementById("show-all");
  showAllButton.classList.add('hidden')
}

const showAll = () => {
  searchIt(true)
}
