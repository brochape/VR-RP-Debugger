using Jint;
using System.IO;
using UnityEngine;
using System.Text;
//using Noesis.Javascript;
//using Jurassic;
using System.Diagnostics;

public class Spawn : MonoBehaviour {
	private TextMesh textMesh;
	// Use this for initialization
	void Start () {
        //StreamReader reader = File.OpenText("Assets/Scripts/.demo-node.js");
		string line;
        string test = "coucou";

        string json = JsonUtility.ToJson(test);
        StringBuilder outputBuilder = new StringBuilder();

        ProcessStartInfo StartInfo = new ProcessStartInfo
        {
            FileName = "cmd.exe",
            Arguments = "node Assets/Scripts/.demo-node.js",
            UseShellExecute = false,
            RedirectStandardOutput = true,
            CreateNoWindow = true
            //WindowStyle = System.Diagnostics.ProcessWindowStyle.Hidden
        };
        using (Process process = Process.Start(StartInfo))
        {
            //
            // Read in all the text from the process with the StreamReader.
            //
            using (StreamReader reader = process.StandardOutput)
            {
                string result = reader.ReadToEnd();
                UnityEngine.Debug.Log(result);
            }
        }


        //object result = new Jint.JintEngine().Run(line);//"var a = [];a.push(42);a.push(32);return a;");
        //object result2 = engine.Evaluate(line);
        //UnityEngine.Debug.Log (result);
        UnityEngine.Debug.Log(json);
        var Text = new GameObject();
		textMesh = Text.AddComponent<TextMesh>();
		textMesh.font = Resources.Load("calibrili") as Font;
        textMesh.text = "";//line;
		textMesh.transform.Translate (Vector3.up*10);
        
		//		Instantiate(textMesh, new Vector3(10, 10, 10), Quaternion.identity);

		//		int i = 0;
		//		while ((line = reader.ReadLine()) != null) {
		//			string[] items = line.Split(' ');
		//			if (items [0].Length != 0) {
		//				Debug.Log (items [0]);
		//				var Text = new GameObject();
		//				var textMesh = Text.AddComponent<TextMesh>();
		//				textMesh.font = Resources.Load("calibrili") as Font;
		//				textMesh.text = items [0];
		//				Instantiate(textMesh, new Vector3(i, 0, 0), Quaternion.identity);
		//				i += 10;
		////				switch (items [0]) {
		////				case 
		//				}
		//			}

		//			int myInteger = int.Parse(items[1]); // Here's your integer.
		//			// Now let's find the path.
		//			string path = null;
		//			foreach (string item in items) {
		//				if (item.StartsWith("item\\") && item.EndsWith(".ddj")) {
		//					path = item;
		//				}
		//			}

		// At this point, `myInteger` and `path` contain the values we want
		// for the current line. We can then store those values or print them,
		// or anything else we like.


	}

	// Update is called once per frame
	void Update () {

	}
}
