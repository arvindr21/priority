<script lang="ts">
  import CardList from "../shared/card/card-list.svelte";
</script>

<div class="m-2 p-2">
  <div class="row">
    <div class="col">
      <CardList color="white" cardbg="danger" type="IU" heading="Important & Urgent" />
    </div>
    <div class="col">
      <CardList color="white" cardbg="success" type="INU" heading="Important & Not Urgent" />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <CardList color="white" cardbg="info" type="NIU" heading="Not Important & Urgent" />
    </div>
    <div class="col">
      <CardList color="dark" cardbg="secondary" type="NINU" heading="Not Important & Not Urgent" />
    </div>
  </div>
</div>
