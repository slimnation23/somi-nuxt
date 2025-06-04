<template>
    <div>
        <section class="pb-10 pt-36 lg:pt-44 lg:pb-20">
            <div class="w-full px-5 md:px-9 xl:px-28 2xl:mx-auto 2xl:container flex flex-col gap-11">
                <div class="flex items-center gap-5 || lg:gap-2.5">
                    <a href="/" class="h-4 w-4 || lg:h-6 lg:w-6 lg:-ml-8">
                        <NuxtImg src="/icons/left-arrow.png" alt="left-arrow" width="32" height="32" />
                    </a>
                    <h2 class="text-primary">
                        {{ $t("news.title") }}
                    </h2>
                </div>
                <p class="title-1">
                    {{ $t("news.description_1") }}
                    <br />
                    {{ $t("news.description_2") }}
                </p>
            </div>
        </section>
        <div>
            <div
                class="w-full px-5 md:px-9 xl:px-28 2xl:mx-auto 2xl:container flex flex-col gap-16 pb-28 || lg:pb-52 lg:gap-20"
            >
                <div class="flex flex-col justify-start gap-5 || lg:items-center lg:flex-row">
                    <div class="flex items-center gap-4">
                        <NuxtImg src="/icons/filter.svg" alt="left-arrow" width="32" height="32" />
                        <p class="title-1 font-semibold">{{$t('news.filter')}}:</p>
                    </div>
                    <ul class="flex flex-wrap title-2 gap-4 || lg:gap-10">
                        <!-- @foreach(categoryService()->all(language:'en',parentCategory: 'news-category') as $category) -->
                        <li class="sort-item border-black filter-items">
                            <a href="/">
                                <!-- {{$category->title}} -->
                            </a>
                        </li>
                        <!-- @endforeach -->
                        <li
                            id="clear"
                            class="flex justify-center items-center rounded-full cursor-pointer filter-items hover:opacity-60 duration-500"
                        >
                            <span onclick="window.location.reload()">Clear</span>
                        </li>
                    </ul>
                </div>

                <div class="flex flex-col justify-center flex-wrap gap-6 || sm:flex-row">
                    <!-- @php
                            $posts = postService()->all(paginate:true,perPage:9,language:'en',parentCategory:
                            'news-category',sort:['orderBy' => 'desc','sortBy' => 'published_at']);
                            @endphp
                            
                            @foreach($posts as $post) -->
                    <a
                        href="/"
                        class="w-full flex flex-col gap-5 shadow-lg rounded-4xl bg-white py-6 px-8 min-h-60 hover:scale-95 duration-700 transition-all ease-in-out || sm:h-80 sm:p-10 sm:w-96"
                    >
                        <div class="font-semibold line-clamp-2 || sm:text-lg">
                            <!-- {{$post->title}} -->
                        </div>
                        <span class="flex items-center gap-4 text-xs">
                            <NuxtImg src="/icons/calendar.svg" alt="calendar" width="32" height="32" />
                            <!-- {{$post->published_at}} -->
                        </span>
                        <p class="text-sm line-clamp-4 || sm:text-base">
                            <!-- {!! $post->description !!}  -->
                        </p>
                    </a>
                    <!-- @endforeach -->
                </div>

                <div class="pagination-wrapper">
                    <!-- {{ $posts->links() }} -->
                </div>
                <a href="#top" class="flex items-end btn btn-secondary !ml-auto || md:!hidden">
                    Go to top
                    <div class="border-l-2 border-t-2 border-primary rotate-45 h-3 w-3 duration-500 -mb-1"></div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
const localPath = useLocalePath();
</script>
