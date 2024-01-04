import Button from "./buttons"

export default function AllButtons({upcount, downcount, commentscount}:{upcount:string, downcount:string, commentscount:string,}) {
    
    const down = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
    <path d="M36.4767 9.22668C36.3352 8.95742 36.1229 8.7319 35.8627 8.57447C35.6025 8.41704 35.3042 8.33366 35 8.33334H5.00002C4.69642 8.3346 4.39891 8.41859 4.13948 8.57628C3.88006 8.73398 3.66852 8.95941 3.52763 9.22833C3.38674 9.49726 3.32183 9.7995 3.33987 10.1026C3.35791 10.4056 3.45822 10.698 3.63002 10.9483L18.63 32.615C18.7829 32.8371 18.9875 33.0187 19.2262 33.1441C19.4648 33.2695 19.7304 33.3351 20 33.3351C20.2696 33.3351 20.5352 33.2695 20.7739 33.1441C21.0125 33.0187 21.2171 32.8371 21.37 32.615L36.37 10.9483C36.5435 10.6985 36.6452 10.406 36.664 10.1024C36.6828 9.79887 36.618 9.49598 36.4767 9.22668ZM20 28.7383L8.18002 11.6667H31.82L20 28.7383Z" fill="#DA0037" stroke="#111111" stroke-width="0.3"/>
  </svg>

    const up = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
    <path d="M5.00002 31.6667H35C35.3038 31.6657 35.6015 31.5819 35.8611 31.4244C36.1208 31.2668 36.3326 31.0414 36.4737 30.7724C36.6148 30.5034 36.6798 30.2011 36.6619 29.8979C36.6439 29.5946 36.5436 29.3021 36.3717 29.0517L21.3717 7.38499C20.75 6.48666 19.2534 6.48666 18.63 7.38499L3.63002 29.0517C3.4564 29.3016 3.35458 29.5943 3.33563 29.898C3.31668 30.2017 3.38133 30.5048 3.52254 30.7743C3.66376 31.0439 3.87615 31.2696 4.13663 31.4269C4.39711 31.5842 4.69572 31.6671 5.00002 31.6667ZM20 11.2617L31.82 28.3333H8.18002L20 11.2617Z" fill="#DA0037" stroke="#111111" stroke-width="0.3"/>
  </svg>
    
    const comment = <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48" fill="none">
    <path d="M24 46C28.3512 46 32.6047 44.7097 36.2225 42.2923C39.8404 39.8749 42.6602 36.439 44.3253 32.419C45.9905 28.3991 46.4261 23.9756 45.5773 19.708C44.7284 15.4404 42.6331 11.5204 39.5563 8.44366C36.4796 5.3669 32.5596 3.27161 28.292 2.42273C24.0244 1.57386 19.6009 2.00953 15.581 3.67466C11.561 5.33979 8.12506 8.15958 5.70767 11.7775C3.29028 15.3953 2 19.6488 2 24C2 27.6373 2.88 31.0644 4.44444 34.0882L2 46L13.9118 43.5556C16.9331 45.1176 20.3651 46 24 46Z" stroke="#DA0037" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

    const share = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 45 38" fill="none">
    <path d="M44.4924 13.3136L34.1081 23.677C33.7834 24.0011 33.3429 24.1831 32.8836 24.1831C32.4244 24.1831 31.9839 24.0011 31.6591 23.677C31.3344 23.3529 31.1519 22.9133 31.1519 22.4549C31.1519 21.9966 31.3344 21.557 31.6591 21.2329L39.0904 13.8188H30.5039C26.2824 13.8176 22.1802 15.2168 18.8424 17.7963C15.5047 20.3757 13.1206 23.9892 12.0653 28.0684C11.9505 28.5122 11.6638 28.8923 11.2682 29.1251C10.8727 29.3579 10.4006 29.4244 9.95595 29.3099C9.51128 29.1954 9.13041 28.9092 8.89712 28.5145C8.66383 28.1197 8.59724 27.6486 8.712 27.2048C9.95728 22.3827 12.7743 18.1109 16.7196 15.062C20.6648 12.0132 25.5141 10.3606 30.5039 10.3643H39.0947L31.6591 2.9502C31.4983 2.78973 31.3708 2.59921 31.2838 2.38954C31.1967 2.17987 31.1519 1.95514 31.1519 1.72819C31.1519 1.50124 31.1967 1.27651 31.2838 1.06684C31.3708 0.857166 31.4983 0.666652 31.6591 0.506175C31.9839 0.182076 32.4244 0 32.8836 0C33.111 0 33.3362 0.044701 33.5463 0.131551C33.7564 0.2184 33.9473 0.345698 34.1081 0.506175L44.4924 10.8695C44.6533 11.03 44.781 11.2205 44.8681 11.4301C44.9552 11.6398 45 11.8646 45 12.0916C45 12.3185 44.9552 12.5433 44.8681 12.753C44.781 12.9627 44.6533 13.1532 44.4924 13.3136ZM36.3451 34.5455H3.46143V8.6371C3.46143 8.17902 3.27909 7.73969 2.95452 7.41577C2.62995 7.09185 2.18973 6.90988 1.73072 6.90988C1.2717 6.90988 0.831488 7.09185 0.506915 7.41577C0.182343 7.73969 0 8.17902 0 8.6371V34.5455C0 35.4617 0.364686 36.3404 1.01383 36.9882C1.66298 37.636 2.5434 38 3.46143 38H36.3451C36.8041 38 37.2443 37.818 37.5689 37.4941C37.8934 37.1702 38.0758 36.7309 38.0758 36.2728C38.0758 35.8147 37.8934 35.3754 37.5689 35.0514C37.2443 34.7275 36.8041 34.5455 36.3451 34.5455Z" fill="#DA0037"/>
  </svg>

    return(
        <div className="w-full flex justify-between items-end mt-[3rem]">
                <div className="flex ">
                    <Button svg={up} count={upcount}/>
                    <Button svg={down} count={downcount}/>
                    <Button svg={comment} count={commentscount}/>
                    
                </div>
                <div>
                    {share}      
                </div>
            </div>
    )
}