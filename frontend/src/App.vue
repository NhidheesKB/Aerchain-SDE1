<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <nav class="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 class="text-xl md:text-2xl font-bold text-blue-600">
        Task Creation App
      </h1>
      <div>
        <RouterLink
          :to="$route.path=='/available-tasks'?'/':'/available-tasks'"
          class="text-gray-700 font-medium hover:text-blue-600 transition"
          >{{$route.path=='/available-tasks'?"Create Task":"Available Tasks"}}</RouterLink
        >
      </div>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>
