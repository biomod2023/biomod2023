<script setup lang="ts">
    import ELSICard from '@/components/ELSICard.vue'
</script>

<template>
    <div class="w-full flex items-center gap-8 overflow-x-scroll">
        <ELSICard class="ml-auto">
            <template #svg>
                <svg
                class="stroke-gold group-hover:stroke-white w-20 h-20 stroke-[0.9px] transition-all duration-200"
                width="97"
                height="97"
                viewBox="0 0 97 97"
                fill="none"
                    >
                    <path
                        d="M36.9061 1.76198C36.1581 2.52195 36.1581 4.04189 36.1581 4.04189L36.1578 32.9206C36.1578 32.9206 36.2359 34.361 35.4098 35.2005C34.5836 36.0402 33.1658 35.9605 33.1658 35.9605L3.99416 35.9605C3.99416 35.9605 2.57621 35.881 1.75 36.7205C0.923789 37.5599 1.00216 39.0004 1.00216 39.0004L1.002 57.9996C1.002 57.9996 0.923551 59.4401 1.74983 60.2795C2.57605 61.1188 3.99399 61.0394 3.99399 61.0394L33.1658 61.0395C33.1658 61.0395 34.5836 60.9598 35.4098 61.7994C36.2359 62.6389 36.1578 64.0793 36.1578 64.0793L36.1581 92.9581C36.1581 92.9581 36.0795 94.3986 36.9058 95.238C37.732 96.0773 39.1498 95.998 39.1498 95.998H57.8498C57.8498 95.998 59.2675 96.0776 60.0938 95.238C60.9199 94.3985 60.8421 92.9581 60.8421 92.9581L60.8418 64.0793C60.8418 64.0793 60.7635 62.6388 61.5898 61.7994C62.416 60.9602 63.8337 61.0395 63.8337 61.0395L93.0057 61.0394C93.0057 61.0394 94.4234 61.119 95.2497 60.2795C96.0759 59.44 95.998 57.9996 95.998 57.9996V39.0004C95.998 39.0004 96.0759 37.56 95.2497 36.7205C94.4234 35.8809 93.0057 35.9605 93.0057 35.9605L63.8337 35.9605C63.8337 35.9605 62.416 36.0398 61.5898 35.2005C60.7634 34.3612 60.8418 32.9206 60.8418 32.9206L60.8421 4.04189C60.8421 4.04189 60.9203 2.6014 60.0941 1.76196C59.2679 0.922525 57.8501 1.00202 57.8501 1.00202H39.1501C39.1501 1.00202 37.6541 1.00202 36.9061 1.76198Z"
                    />
                </svg>
            </template>

            <template #text> Hospitals </template>
        </ELSICard>

        <ELSICard>
            <template #svg>
                <svg class="stroke-gold group-hover:stroke-white w-20 h-20 stroke-[0.9px] transition-all duration-200" width="135" height="95" viewBox="0 0 135 95" fill="none">
                    <path d="M67.7079 0.839844L133.996 36.4187L67.8825 72.8743L1 36.1275L67.7079 0.839844Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M61.8394 36.6942C61.8394 35.2505 64.503 34.0796 67.7887 34.0796C71.0744 34.0796 73.738 35.2505 73.738 36.6942C73.738 38.1386 71.0744 39.3088 67.7887 39.3088C64.503 39.3088 61.8394 38.1386 61.8394 36.6942Z" stroke-miterlimit="10"/>
                    <path d="M30.7124 82.9211C39.7382 97.0635 95.1742 98.6165 104.992 83.2332" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M133.998 39.073L134 66.5373" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M104.993 55.9265V83.3909" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M30.7139 55.9265V83.3909" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </template>

            <template #text> Universities </template>
        </ELSICard>

        <ELSICard>
            <template #svg>
                <svg class="stroke-gold group-hover:stroke-white w-20 h-20 stroke-[0.9px] transition-all duration-200" 
                width="103" height="97" viewBox="0 0 103 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.4587 94.9683C33.5033 94.0109 27.6006 91.1611 21.788 86.5799C9.53846 76.9257 1.40332 46.9883 1.40332 46.9883C1.40332 46.9883 21.6711 50.7459 33.9203 60.3996C39.4185 64.7327 43.902 69.8778 46.871 74.8875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M35.6963 93.0861C31.6792 87.8245 41.797 76.9995 58.2947 68.9077C74.7924 60.8159 101.597 60.5566 101.597 60.5566C101.597 60.5566 89.3388 79.8687 72.8411 87.961C56.3434 96.0528 39.7127 98.3476 35.6963 93.0861Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M47.0271 75.3374C47.0271 75.3374 42.9655 52.5806 47.1824 35.9386C51.3987 19.2964 63.8656 9.07275 63.8656 9.07275" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M49.6748 19.0745C48.9011 16.1812 47.3555 5.25781 47.3555 5.25781C47.3555 5.25781 51.1876 14.4441 51.9619 17.3375C52.7356 20.2308 52.8507 22.9651 52.2196 23.4448C51.5879 23.9245 50.4485 21.9678 49.6748 19.0745Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M56.8564 19.4315C59.6255 18.0519 69.93 14.9421 69.93 14.9421C69.93 14.9421 60.9868 21.4217 58.2177 22.8013C55.4486 24.181 52.899 24.545 52.5226 23.6145C52.1468 22.684 54.0873 20.8112 56.8564 19.4315Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M63.1167 11.9665C65.4109 11.4053 73.3711 10.7698 73.3711 10.7698C73.3711 10.7698 65.3877 14.0343 63.0934 14.5954C60.7997 15.1565 58.9451 15.0229 58.9517 14.2969C58.9582 13.5709 60.823 12.5276 63.1167 11.9665Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M50.0135 46.055C53.1381 44.4388 65.1248 40.4446 65.1248 40.4446C65.1248 40.4446 55.3942 47.6832 52.2695 49.2994C49.1449 50.9155 46.1068 51.4994 45.484 50.6036C44.8612 49.7078 46.8888 47.6711 50.0135 46.055Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M51.2464 59.7085C54.7665 58.2052 68.0715 54.9465 68.0715 54.9465C68.0715 54.9465 56.9128 62.1357 53.3927 63.6385C49.8731 65.1419 46.5391 65.4807 45.9468 64.3952C45.3538 63.3102 47.7268 61.2119 51.2464 59.7085Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M38.836 61.2278C36.5423 58.4703 30.5186 47.5098 30.5186 47.5098C30.5186 47.5098 40.4377 55.7154 42.7313 58.4729C45.025 61.2304 46.0123 64.0822 44.9367 64.8431C43.8612 65.6035 41.1297 63.9853 38.836 61.2278Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M56.774 10.356C56.8181 8.27341 58.6244 1.08691 58.6244 1.08691C58.6244 1.08691 60.1223 8.37463 60.0776 10.4571C60.0334 12.5396 59.258 14.2052 58.3453 14.1772C57.4332 14.1493 56.7293 12.4384 56.774 10.356Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M50.3087 34.0015C52.8004 31.9595 62.4463 25.9834 62.4463 25.9834C62.4463 25.9834 54.7767 34.2002 52.2856 36.2422C49.7939 38.2841 47.332 39.4381 46.7862 38.8195C46.2404 38.2005 47.8176 36.0435 50.3087 34.0015Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M42.6082 33.2945C41.7922 29.692 40.9033 16.2795 40.9033 16.2795C40.9033 16.2795 45.6857 27.9062 46.5018 31.5087C47.3178 35.1112 47.1073 38.4315 46.0323 38.9247C44.9573 39.4174 43.4243 36.897 42.6082 33.2945Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M40.2709 46.0454C38.6895 42.6988 34.9409 29.8691 34.9409 29.8691C34.9409 29.8691 42.1822 40.2991 43.7636 43.6457C45.345 46.9924 45.8449 50.242 44.8803 50.9049C43.9157 51.5678 41.8523 49.3921 40.2709 46.0454Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M37.9453 94.9683C37.9453 94.9683 46.3821 84.2323 56.3471 78.2346C66.3116 72.2369 77.8044 70.9785 77.8044 70.9785" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M37.945 82.9735C37.945 82.9735 34.4875 76.5827 28.7983 70.9786C23.1092 65.374 15.1885 60.5566 15.1885 60.5566" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </template>

            <template #text> Agriculture </template>
        </ELSICard>

        <ELSICard>
            <template #svg>
                <svg class="stroke-gold group-hover:stroke-white w-20 h-20 stroke-[0.9px] transition-all duration-200"
                width="121" height="99" viewBox="0 0 121 99" fill="none">
                    <path d="M72.9094 96.5888L72.9093 61.6842C72.9093 61.6842 72.9778 60.5816 72.2542 59.939C71.5306 59.2964 70.2889 59.3573 70.2889 59.3573H49.981C49.981 59.3573 48.7392 59.2964 48.0156 59.939C47.292 60.5816 47.3606 61.6842 47.3606 61.6842V96.5888" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.6028 33.4387V94.6229C15.6028 94.6229 15.5341 96.0725 16.2581 96.9173C16.9821 97.7621 18.2245 97.6821 18.2245 97.6821H102.775C102.775 97.6821 104.017 97.7622 104.741 96.9173C105.465 96.0725 105.397 94.6229 105.397 94.6229L105.397 33.4387" stroke-linejoin="round"/>
                    <path d="M1 38.549L58.224 1.96268C58.224 1.96268 59.2483 1.32029 60.1749 1.31592C61.1083 1.31152 62.1471 1.96268 62.1471 1.96268L120 38.549" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </template>

            <template #text> Homes </template>
        </ELSICard>

        <ELSICard>
            <template #svg>
                <svg class="stroke-gold group-hover:stroke-white w-20 h-20 stroke-[0.9px] transition-all duration-200"
                width="93" height="95" viewBox="0 0 93 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.5859 24.9617L49.3469 39.9872L39.5859 55.0127H24.9445L15.1836 39.9872L24.9445 24.9617H39.5859Z" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M63.7851 9.93628L73.5461 24.9618L63.7851 39.9873H49.1437L39.3828 24.9618L49.1437 9.93628H63.7851Z" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M64.0562 70.0382L73.5459 85.0637" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.1836 9.93616L24.6734 24.9617" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M49.3468 70.0383L44.1274 77.3087" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24.6736 55.0127L19.9287 62.2831" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.1837 39.9873H9.96436" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M73.5459 55.0127H88.2551" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M63.7851 39.9873L73.5461 55.0128L63.7851 70.0383H49.1437L39.3828 55.0128L49.1437 39.9873H63.7851Z" stroke-linecap="round" stroke-linejoin="round"/>
                    <ellipse cx="4.03327" cy="40.2296" rx="1.66071" ry="1.69643" class="fill-gold"/>
                    <ellipse cx="16.6071" cy="67.6147" rx="1.42347" ry="1.45408" class="fill-gold"/>
                    <ellipse cx="41.0435" cy="82.1555" rx="1.66071" ry="1.45408" class="fill-gold"/>
                </svg>

            </template>

            <template #text> Research Facilities </template>
        </ELSICard>

        <ELSICard>
            <template #svg>
                <svg class="stroke-gold group-hover:stroke-white w-20 h-20 stroke-[0.9px] transition-all duration-200"
                width="83" height="110" viewBox="0 0 83 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.395 98.4043H80.4705V109.39H16.395V98.4043Z" stroke-miterlimit="10"/>
                    <path d="M1 64.1047H33.9711V73.1332H1V64.1047Z" stroke-miterlimit="10"/>
                    <path d="M17.4854 73.6321C17.4854 72.9909 18.6577 73.113 18.9875 73.1579C19.323 73.2029 21.9162 72.7062 22.3406 73.1332C25.3261 76.1342 28.1034 83.3025 34.6009 87.5238C45.3943 94.5356 59.2885 91.3893 63.4836 88.1696C65.9014 86.3132 77.7719 75.4023 73.9168 64.1048C69.1889 50.2467 54.4623 44.6643 57.9825 42.5068C58.9795 41.8955 60.1752 38.684 61.3671 38.7736C67.3355 39.2221 77.0871 53.0634 77.0871 53.0634C77.0871 53.0634 81.1421 59.0265 81.1421 68.619C81.1421 86.1297 66.6708 98.4041 49.0627 98.4041C38.0019 98.4041 29.8566 94.0584 24.2282 87.5875C20.8965 83.7572 17.4854 80.1435 17.4854 73.6321Z" stroke-miterlimit="10"/>
                    <path d="M44.6006 34.1155C44.6006 28.5562 48.38 24.0496 53.043 24.0496C57.7059 24.0496 61.486 28.5562 61.486 34.1155C61.486 39.6748 57.7059 44.1812 53.043 44.1812C48.38 44.1812 44.6006 39.6748 44.6006 34.1155Z" stroke-miterlimit="10"/>
                    <path d="M22.459 39.3186L68.2636 3.48071L77.2048 17.1031C77.2048 17.1031 71.005 21.9415 64.4659 27.461C63.991 27.8618 60.9639 30.2632 60.9639 30.2632C60.9639 30.2632 60.0508 27.6006 58.932 26.7944C58.5606 26.5266 56.5034 24.7195 55.8261 24.5503C53.2512 23.9072 50.5994 23.9825 48.4218 25.6863C48.4218 25.6863 46.5153 27.2417 45.5221 29.6847C44.9987 30.9728 44.8675 32.1541 44.6644 33.7692C44.5011 35.0623 45.1929 37.8949 45.8872 39.3757C46.3772 40.4211 47.146 40.6214 46.3987 41.2066C40.7627 45.6159 31.4002 52.9408 31.4002 52.9408L22.459 39.3186Z" stroke-miterlimit="10"/>
                    <path d="M77.2429 1.61011L81.9998 8.84056L75.2911 14.1022L70.5342 6.87172L77.2429 1.61011Z" stroke-miterlimit="10"/>
                    <path d="M17.9438 45.8766L23.8372 41.3369L30.0294 50.9189L24.1361 55.4586L17.9438 45.8766Z" stroke-miterlimit="10"/>
                    <path d="M47.9849 34.1156C47.9849 31.2348 50.2495 28.8994 53.0426 28.8994C55.8357 28.8994 58.1003 31.2348 58.1003 34.1156C58.1003 36.9963 55.8357 39.3316 53.0426 39.3316C50.2495 39.3316 47.9849 36.9963 47.9849 34.1156Z" stroke-miterlimit="10"/>
                </svg>
            </template>

            <template #text> Hospital Labs </template>
        </ELSICard>

        <ELSICard class="mr-auto">
            <template #svg>
                <svg class="stroke-gold group-hover:stroke-white w-20 h-20 stroke-[0.9px] transition-all duration-200"
                width="109" height="109" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M95.375 27.25L68.8321 53.7929C68.4416 54.1834 67.8084 54.1834 67.4179 53.7929L55.2071 41.5821C54.8166 41.1916 54.1834 41.1916 53.7929 41.5821L31.7917 63.5833" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.625 13.625V92.175C13.625 93.2951 13.625 93.8552 13.843 94.283C14.0347 94.6593 14.3407 94.9653 14.717 95.157C15.1448 95.375 15.7049 95.375 16.825 95.375H95.375" stroke-linecap="round"/>
                </svg>

            </template>

            <template #text> Hospital Labs </template>
        </ELSICard>

    </div>
</template>