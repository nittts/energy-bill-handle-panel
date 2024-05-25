export default function mapNumRange(start: number, end: number) {
  const nums = [];

  let count = start + 1;
  while (count < end) {
    nums.push(count);
    count++;
  }

  return nums;
}
