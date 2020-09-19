<template>
  <div class="container">
    <div
      class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Animations & Transitions</h1>
      <hr>
      <button class="btn btn-primary" @click="show = !show">Show Alert</button>
      <br><br>
      <transition name="fade">
        <div class="alert alert-info" v-show="show">This is some info</div>  
      </transition>
      <transition name="slide" type="animation">
        <div class="alert alert-info" v-if="show">This is some info</div>  
      </transition>
      <transition name="fade" appear>
        <div class="alert alert-info" v-if="show">This is some info</div>  
      </transition>
      <transition 
          enter-active-class="animate__animated animate__bounce"
          leave-active-class="animate__animated animate__shakeX"
        >
        <div class="alert alert-info" v-if="show">This is some info</div>  
      </transition>
      <br>
      <h1>Dynamic changing class</h1>
      <select v-model="alertAnimation" class="form-control">
        <option value="fade">Fade</option>
        <option value="slide">Slide</option>
      </select>
      <br>
      <transition :name="alertAnimation">
        <div class="alert alert-info" v-if="show">This is some info</div>  
      </transition>
      <br>
      <hr>
      <h1>Transtion between two elements</h1>
      <transition :name="alertAnimation" mode="in-out">
        <div class="alert alert-info" v-if="show" key="info">This is some info</div>  
        <div class="alert alert-warning" v-else key="warning">This is a warning</div>  
      </transition>
      <hr>
      <br><br>
      <button class="btn btn-primary" @click="load = !load">Load/ Remove Element</button>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
        :css="false"
        >
        <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
      </transition>
      <hr>
      <button class="btn btn-primary" 
        @click="selectedComponent == 'app-success-alert' ? 
          selectedComponent = 'app-danger-alert': 
          selectedComponent = 'app-success-alert'">Toogle components</button>

      <br>
      <transition name="fade" mode="out-in">
        <component :is="selectedComponent"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import SuccessComp from './components/SuccessComp.vue';
import DangerComp from './components/DangerComp.vue';

export default {
  data () {
    return {
      show: false,
      load: true,
      alertAnimation: 'fade',
      elementWidth: 100,
      selectedComponent: 'app-alert-danger'
    }
  },
  methods: {
    beforeEnter(element) {
      console.log("Before Enter " + element);
      this.elementWidth = 100;
      element.style.width = 100 + 'px';
    },
    enter(element, done) {
      console.log('enter');
      let round = 1;
      const interval = setInterval(() => {
        element.style.width = ( this.elementWidth + round * 10 ) + 'px';
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(element) {
      console.log("After entered " + element);
    },
    enterCancelled(element) {
      console.log("enter Cancelled" + element);
    },
    beforeLeave(element) {
      console.log("before leave");
      this.elementWidth = 300;
      element.style.width = this.elementWidth +'px';
    },
    leave(element, done) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        element.style.width = ( this.elementWidth - round * 10 ) + 'px';
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(elemement){
      console.log("after Leave" + elemement);
    },
    leaveCancelled(elemement){
      console.log("leave cancelled" + elemement);
    }
  },
  components: {
    appDangerAlert: DangerComp,
    appSuccessAlert: SuccessComp
  }
};
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {
    /* by default it's opacity:1*/
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 3s;
  }

  .slide-leave {

  }

  .slide-leave-active {
      animation: slide-out 1s ease-out forwards;
      transition: opacity 3s;
      opacity: 0;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0px);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(20px);
    }
  }

</style>
