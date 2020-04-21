using System.Collections.Generic;

namespace QueueExample
{
  public class MyQueue<T>
  {
    // place to store the tThings
    private List<T> _queue = new List<T>();

    // method to add something to the end of the queue
    public void QueueItem(T item)
    {
      _queue.Add(item);
    }

    // method to remove something from the start of the queue
    public T DequeueItem()
    {
      var item = _queue[0];
      _queue.RemoveAt(0);
      return item;
    }
  }
}