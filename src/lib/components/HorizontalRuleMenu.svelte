<script lang="ts">
</script>

<hr>

<style>
hr {
  position: relative;
  overflow: visible;
  margin-block-start: 2em;
  margin-block-end: 2em;
  border: none;
  height: 1px;
  background-image: linear-gradient(to right,rgba(var(--color-surface-800)/1),rgba(var(--color-secondary-500) / 1),rgba(var(--color-primary-500) / 1),rgba(var(--color-secondary-500) / 1),rgba(var(--color-surface-800)/0.33));
}



hr::before {
  content: '\f699';
  font-family: 'Font Awesome 6 Free';
  font-weight: 600;
  color:  rgba(var(--color-primary-300) / 1);
  display: inline-block;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: 50% 50%;
  padding: 0 10px 0 14px;
  background-color:rgb(var(--color-surface-800))
}
</style>