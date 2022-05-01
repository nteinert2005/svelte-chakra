<script>
  import ModalHeader from "./components/ModalHeader.svelte";
  import ModalFooter from "./components/ModalFooter.svelte";
  import { X, Icon } from "svelte-hero-icons";

  export let isOpen;

  function open() {
    isOpen = true;
  }

  function close() {
    isOpen = false;
  }
</script>

{#if isOpen}
  <div class="modal">
    <div class="overlay" on:click={close} />
    <div class="content-wrapper">
      <ModalHeader>
        <slot name="header" />
        <span class="modal-close"><Icon src={X} size="24px" /></span>
      </ModalHeader>
      <div class="content">
        <slot name="content" />
      </div>
      <ModalFooter>
        <slot name="footer" />
      </ModalFooter>
    </div>
  </div>
{/if}

<style>
  div.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.48);
  }

  div.content-wrapper {
    z-index: 10;
    max-width: 70vw;
    border-radius: 0.3rem;
    background-color: white;
    overflow: hidden;
    padding-inline-start: 1.5rem;
    padding-inline-end: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  div.content {
    max-height: 50vh;
    overflow: auto;
  }

  span.modal-close {
    margin-left: auto;
  }
</style>
