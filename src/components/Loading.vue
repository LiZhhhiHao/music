<template>
    <div class="loading">
        <div>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
        </div>
    </div>
</template>
<style lang="less">
    .loading{
        width: 100%;
        div{
            margin: 0 auto;
            width: 100px;
            height: 50px;
            display: flex;
            text-align: center;
            justify-content: space-around;
            align-items: center;
            i{
                display: inline-block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                // background-color: green;
                animation: loading 0.5s ease 0s infinite alternate ;
                transition:backgroundColor .5s ease;
                &:nth-of-type(2){
                    animation-delay: -0.8s;
                    }
                &:nth-of-type(3){
                    animation-delay: -0.6s;
                }
                &:nth-of-type(4){
                    animation-delay: -0.4s;
                    }
                &:nth-of-type(5){
                    animation-delay: -0.2s;
                }
            }
        }
    }
    @keyframes loading {
        0%{
            transform: translateY(16px);
            background-color: #009688;
        }
        100%{
            transform: translateY(-16px);
            background-color: #a4dab6;
        }
    }
</style>